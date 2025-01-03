import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import deleteAgent from "../api/Agents/deleteAgent";
import deleteWeapon from "../api/Weapons/deleteWeapon";

const useDeleteWeaponCard = () => {
  return useMutation({
    mutationFn: deleteWeapon,
    onSuccess: () => {
      window.location.reload();
      console.log("Weapon deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting weapon:", error);
    },
  });
};

const useDeleteAgentCard = () => {
  return useMutation({
    mutationFn: deleteAgent,
    onSuccess: () => {
      window.location.reload();
      console.log("Agent deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting agent:", error);
    },
  });
};

const Card = ({ data, type }) => {
  const navigate = useNavigate();
  const user = Cookies.get("userName");

  const { mutate: deleteWeaponCardMutate } = useDeleteWeaponCard();
  const { mutate: deleteAgentCardMutate } = useDeleteAgentCard();

  const onSubmit = (data) => {
    console.log(data);
    if (type === "agent") {
      deleteAgentCardMutate(data, {
        onSuccess: () => {},
      });
    } else {
      deleteWeaponCardMutate(data, {
        onSuccess: () => {},
      });
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.length > 0 ? (
          data.map((e) => (
            <div key={e.id} style={{ textAlign: "center", margin: "2em" }}>
              {user === "admin" && (
                <div onClick={() => onSubmit(e.displayName)}>X</div>
              )}
              <div
                style={{
                  backgroundColor: "lightGray",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                onClick={() => navigate(`${type}/details/${e.id}`)}
              >
                <img
                  style={{
                    height: "180px",
                    width: "180px",
                    borderRadius: 20,
                  }}
                  alt="feature"
                  src={e.imageUrl}
                />
              </div>
              <div style={{ marginTop: 20, color: "white" }}>
                <h1>{e.displayName}</h1>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>No Item Found ;/</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
