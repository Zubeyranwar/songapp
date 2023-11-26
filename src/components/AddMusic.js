// MusicForm.js
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMusic } from "../redux/action";
const AddMusic = ({ showModal, closeModal }) => {
  const dispatch = useDispatch();

  const [music, setMusic] = useState();

  const title = useRef();
  const artist = useRef();


  const handleInput = () => {
    setMusic({
      title: title.current.value,
      artist: artist.current.value,
    });
  };

  const handleMusic = () => {
    dispatch(addMusic(music));
    closeModal();
  };

  return (
    <>
      {showModal && (
        <AddContainer>
          <form onSubmit={() => handleMusic()}>
            <FormLabel htmlFor="title">Title:</FormLabel>
            <FormInput
              type="text"
              onChange={handleInput}
              id="title"
              required
              ref={title}
            />
            <FormLabel htmlFor="title">Artist:</FormLabel>
            <FormInput
              type="text"
              onChange={handleInput}
              id="artist"
              required
              ref={artist}
            />
            <FormActions>
              <SaveButton type="submit">Add Music</SaveButton>
              <CancelButton type="button" onClick={closeModal}>
                Cancel
              </CancelButton>
            </FormActions>
          </form>
        </AddContainer>
      )}
    </>
  );
};

const AddContainer = styled.div`
  position: fixed;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  margin: 3rem 2rem 0 2rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  right: 60px;
  bottom: 0;
  z-index: 100;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-family);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-golden);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem 2rem;
  margin-bottom: 16px;
  font-size: 1.1rem;
  font-family: var(--font-family);
  color: var(--color-white);
`;

const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const CancelButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default AddMusic;
