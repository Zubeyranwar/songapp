import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MusicList } from "../redux/action";
import {
  deleteMusic,
  musicTOUpdate,
  selectedMusic,
} from "../redux/selectedAction";
import Update from "./Update";
const Main = () => {
  const music = useSelector((state) => state.MusicReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MusicList());
  }, [dispatch]);

  const [UpdateModal, setUpdateModal] = useState(false);

  const showUpdateModal = (data) => {
    dispatch(musicTOUpdate(data));
    setUpdateModal(!UpdateModal);
  };
  const closeUpdateModal = () => {
    setUpdateModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (!selectedMusic) {
    return null;
  }
  const handleDelete = (id) => {
    const alert = window.confirm("Do you wanna delete this song?");
    if (alert) {
      dispatch(deleteMusic(id));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <MainContainer className="Main_Container">
      <div> </div>
      {music?.map((item) => (
        <div key={item?.id} className="Main_Container_Content">
          {/* Move the key prop here */}
          <div className="music_data">
            <div className="music_info">
              <h5>{item?.title}</h5>
              <h5>{item?.artist} </h5>
            </div>
          </div>
          <div className="action">
            <Update
              showModal={UpdateModal}
              closeModal={() => closeUpdateModal()}
            />

            <FaEdit
              className="icon"
              style={{ color: "var(--color-text)" }}
              onClick={() => showUpdateModal(item)}
            />
            <FaTrash
              className="icon"
              style={{ color: "red" }}
              onClick={() => handleDelete(item.id)}
            />
          </div>
        </div>
      ))}
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0.2rem;
  padding: 2rem;
  flex-wrap: wrap;

  .Main_Container_Content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .music_data {
      display: flex;
      justify-content: center;
      padding: 1rem;
      width: 70%;
      font-family: var(--font-family);
      color: var(--color-golden);
      font-size: 1.1rem;
      font-weight: 400;
      .music_info {
        width: 250px;
        h5:last-child {
          color: var(--color-gray);
        }
      }
      .image {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      h4 {
        margin: 0.2rem 0;
      }
    }

    div {
      margin: 0 3rem;
    }
    .action {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3rem;
      .icon {
        margin: 0 0.3rem;
        font-size: 1.1rem;
        cursor: pointer;
      }
    }
  }
`;

export default Main;
