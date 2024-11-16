const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const csvParser = require("csv-parser");
const fs = require("fs");
require("./config"); // Ensure your MongoDB connection is set up in this file

const Contact = require("./models/contact.js"); // Import the Contact model

const app = express();
const PORT = 5000;
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Middleware
app.use(express.json());
app.use(cors());

// Multer Configuration for File Upload
const upload = multer({ dest: "uploads/" });

// Routes

// POST /contacts - Add a new contact
app.post("/contacts", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact added successfully", contact });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: "Duplicate email detected" });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
});

// GET /contacts - Retrieve all contacts
app.get("/contacts", async (req, res) => {
  try {
    const { query, filter } = req.query;
    const searchCriteria = query
      ? { [filter]: { $regex: query, $options: "i" } }
      : {};

    const contacts = await Contact.find(searchCriteria);
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// GET /contacts/:id - Retrieve a contact by ID
app.get("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// PUT /contacts/:id - Update a contact
app.put("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /contacts/:id - Delete a contact
app.delete("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /contacts/export - Export contacts as CSV

// POST /contacts/import - Import contacts from CSV
app.post("/contacts/import", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const contacts = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row) => {
        contacts.push({
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          phone: row.phone,
          company: row.company,
          jobTitle: row.jobTitle,
        });
      })
      .on("end", async () => {
        try {
          await Contact.insertMany(contacts);
          fs.unlinkSync(filePath);
          res.status(200).json({ message: "Contacts imported successfully" });
        } catch (error) {
          console.error("Error saving contacts to the database:", error);
          res.status(500).json({ error: "Failed to save contacts" });
        }
      });
  } catch (error) {
    console.error("Error processing file upload:", error);
    res.status(500).json({ error: "Failed to process the file" });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
