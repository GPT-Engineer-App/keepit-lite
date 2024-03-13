import React, { useState } from "react";
import { Box, IconButton, Input, Stack, Textarea, useDisclosure, VStack, HStack, Heading, Badge, Wrap, WrapItem } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  const addNote = () => {
    if (currentTitle || currentContent) {
      const newNote = {
        id: Date.now(),
        title: currentTitle,
        content: currentContent,
      };
      setNotes([newNote, ...notes]);
      setCurrentTitle("");
      setCurrentContent("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <VStack p={8} spacing={4} align="stretch">
      <Heading mb={6}>Note Keeper</Heading>
      <HStack mb={4}>
        <Input placeholder="Title" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} mr={2} />
        <IconButton aria-label="Add note" icon={<FaPlus />} onClick={addNote} />
      </HStack>
      <Textarea placeholder="Take a note..." value={currentContent} onChange={(e) => setCurrentContent(e.target.value)} mb={6} />
      <Wrap>
        {notes.map((note) => (
          <WrapItem key={note.id} p={1}>
            <Box p={4} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <HStack justifyContent="space-between">
                <Heading size="md" mb={2}>
                  {note.title}
                </Heading>
                <IconButton size="sm" aria-label="Delete note" icon={<FaTrash />} onClick={() => deleteNote(note.id)} />
              </HStack>
              <Badge mb={2}>Note</Badge>
              <Box>{note.content}</Box>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Index;
