import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import usePhoneBookStore from "../stores/usePhoneBookStore.js";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const { addContact } = usePhoneBookStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNum.trim()) return;
    addContact(name, phoneNum);
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="전화번호"
        variant="outlined"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
