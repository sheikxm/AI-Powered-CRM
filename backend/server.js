const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./config");
const app = express();
const PORT = 5000;

// MongoDB Connection
// Middleware
app.use(express.json());
app.use(cors());

// Schema and Model
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  company: { type: String },
  jobTitle: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);

// Routes
// POST /contacts
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


// GET /contacts

app.get("/contacts", async (req, res) => {
  try {
    const { query, filter } = req.query;
    const searchCriteria = query
      ? { [filter]: { $regex: query, $options: "i" } } // Case-insensitive search
      : {};

    const contacts = await Contact.find(searchCriteria);
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.get("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Fetch the contact by ID
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

// PUT /contacts/:id
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

// DELETE /contacts/:id
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

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
