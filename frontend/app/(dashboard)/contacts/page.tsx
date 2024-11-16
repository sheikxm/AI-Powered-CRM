'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
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

import Link from "next/link";
import debounce from "lodash.debounce";

interface Contact {
  _id?: string; // MongoDB ID field
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

  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const [searchFilter, setSearchFilter] = useState<keyof Contact>("firstName"); // Filter type

  // Fetch contacts based on query and filter
  const fetchContacts = async (query = "", filter = "firstName") => {
    try {
      const response = await axios.get(`http://localhost:5000/contacts`, {
        params: { query, filter },
      });
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Debounced search function
  const debouncedSearch = debounce((query: string, filter: keyof Contact) => {
    fetchContacts(query, filter);
    console.log(fetchContacts)
  }, 500); // 500ms debounce delay

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
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
    debouncedSearch(value, searchFilter); // Trigger the debounced search
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/contacts/addnewcontacts"
        >
          Add New Contact
        </Button>
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
            onChange={handleSearchChange} // Trigger real-time search on change
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
                    color="primary"
                    component={Link}
                    href={`/contacts/edit/${contact._id}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(contact._id!)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ContactManagement;
