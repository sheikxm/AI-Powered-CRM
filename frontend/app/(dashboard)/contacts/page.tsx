'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import Link from "next/link";
import debounce from "lodash.debounce";

interface Contact {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
}

const ContactManagement = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof Contact>("firstName");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState<keyof Contact>("firstName");

  const fetchContacts = async (query = "", filter = "firstName") => {
    try {
      const response = await axios.get(`${API_URL}/contacts`, {
        params: { query, filter },
      });
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/contacts/${id}`);
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleSort = (property: keyof Contact) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    debouncedSearch(value, searchFilter);
  };

  const debouncedSearch = debounce((query: string, filter: keyof Contact) => {
    fetchContacts(query, filter);
  }, 500);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("${API_URL}/contacts/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchContacts(); // Refresh the contact list after importing
    } catch (error) {
      console.error("Error importing contacts:", error);
    }
  };

  const handleExport = () => {
    if (contacts.length === 0) {
      console.warn("No contacts to export.");
      return;
    }
  
    // Define CSV headers
    const headers = ["First Name", "Last Name", "Email", "Phone", "Company", "Job Title"];
  
    // Convert contacts array into CSV rows
    const csvRows = [
      headers.join(","), // Header row
      ...contacts.map((contact) =>
        [
          contact.firstName,
          contact.lastName,
          contact.email,
          contact.phone,
          contact.company,
          contact.jobTitle,
        ]
          .map((value) => `"${value || ""}"`) // Escape values with quotes
          .join(",") // Join fields with a comma
      ),
    ];
  
    // Create a CSV string
    const csvString = csvRows.join("\n");
  
    // Create a Blob from the CSV string
    const blob = new Blob([csvString], { type: "text/csv" });
    const downloadUrl = URL.createObjectURL(blob);
  
    // Trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "contacts.csv";
    document.body.appendChild(link);
    link.click();
  
    // Cleanup
    URL.revokeObjectURL(downloadUrl);
    document.body.removeChild(link);
  };
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedContacts = sortedContacts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/contacts/addnewcontacts"
          >
            Add New Contact
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component="label"
            startIcon={<UploadFileIcon />}
          >
            Import Contacts
            <input
              type="file"
              accept=".csv"
              hidden
              onChange={handleFileUpload}
            />
          </Button>
          {/* Export Button */}
          <Button
            variant="contained"
            color="success"
            onClick={handleExport}
            startIcon={<UploadFileIcon />}
          >
            Export Contacts
          </Button>
        </Box>
        <Box display="flex" gap={2}>
          <FormControl>
            <InputLabel>Filter By</InputLabel>
            <Select
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value as keyof Contact)}
            >
              <MenuItem value="firstName">First Name</MenuItem>
              <MenuItem value="lastName">Last Name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
              <MenuItem value="company">Company</MenuItem>
              <MenuItem value="jobTitle">Job Title</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>
      </Box>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              {["First Name", "Last Name", "Email", "Phone", "Company", "Job Title"].map(
                (header) => (
                  <TableCell key={header}>
                    <TableSortLabel
                      active={orderBy === header.toLowerCase()}
                      direction={orderBy === header.toLowerCase() ? order : "asc"}
                      onClick={() => handleSort(header.toLowerCase() as keyof Contact)}
                    >
                      {header}
                    </TableSortLabel>
                  </TableCell>
                )
              )}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedContacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                  <IconButton
                    component={Link}
                    href={`/contacts/edit/${contact._id}`}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(contact._id!)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default ContactManagement;
