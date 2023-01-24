import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { Badge, FormControl, InputLabel, MenuItem, NativeSelect } from "@mui/material";
import Select from "@mui/material/Select";
import MailIcon from "@mui/icons-material/Mail";

export const Navbar = () => {
  // /////Select
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // /////Select
  return (
    <nav>
      <div className="navheader">
        <div className="selecGroup">
          <NativeSelect
            defaultValue={"EN"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={"EN"}>EN</option>
            <option value={"UZ"}>UZ</option>
          </NativeSelect>
          <NativeSelect
            defaultValue={"USD"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={"USD"}>USD</option>
            <option value={"SUM"}>SUM</option>
          </NativeSelect>
        </div>
        <div className="lincGroup">
          <NavLink to={"/profile"}>
            <PermIdentityIcon />
            My profile
          </NavLink>
          <NavLink to={"/cart"}>
            <Badge color="secondary" badgeContent={10} max={10}>
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
          <NavLink to={"/items"}>Items</NavLink>
          <NavLink>
            $0.00
            <SearchIcon />
          </NavLink>
        </div>
      </div>
      <div className="navbody">
        <NavLink to={"/"} className="Logo">
          {" "}
          <img src="./img/icon.svg" alt="Logo" />
          E-Comm{" "}
        </NavLink>
        <ul>
          <NavLink className="homeLink" to={"/"}>
            HOME
            <div className="hoverCard">
              <div className="HovercardContent">
                <img src="./img/arrow.png" alt="" className="mgposition" />
                <div className="hoverCardHead">
                  <h4>Categorya</h4>
                  <h4>Categorya</h4>
                  <h4>Categorya</h4>
                </div>
                <div className="hoverCardBody">
                  <ul>
                    <NavLink to={"/"}>Caporate Shoes</NavLink>
                    <NavLink to={"/bags"}>Snaekers</NavLink>
                    <NavLink to={"/sneakers"}>Sandals</NavLink>
                    <NavLink to={"/belt"}>Sport Shoe</NavLink>
                    <NavLink to={"/contact"}>Trainers</NavLink>
                  </ul>
                  <ul>
                    <NavLink to={"/"}>Caporate Shoes</NavLink>
                    <NavLink to={"/bags"}>Snaekers</NavLink>
                    <NavLink to={"/sneakers"}>Sandals</NavLink>
                    <NavLink to={"/belt"}>Sport Shoe</NavLink>
                    <NavLink to={"/contact"}>Trainers</NavLink>
                  </ul>
                  <ul>
                    <NavLink to={"/"}>HOT DEAL</NavLink>
                    <NavLink to={"/bags"}>Sunglasses</NavLink>
                    <NavLink to={"/sneakers"}>Belts</NavLink>
                    <NavLink to={"/belt"}>Handbags</NavLink>
                    <NavLink to={"/contact"}>Snaekers</NavLink>
                  </ul>
                  <ul>
                    <NavLink to={"/"}>HOT DEAL</NavLink>
                    <NavLink to={"/bags"}>Sunglasses</NavLink>
                    <NavLink to={"/sneakers"}>Belts</NavLink>
                    <NavLink to={"/belt"}>Handbags</NavLink>
                    <NavLink to={"/contact"}>Snaekers</NavLink>
                  </ul>
                  <ul>
                    <NavLink to={"/"}>Caporate Shoes</NavLink>
                    <NavLink to={"/bags"}>Snaekers</NavLink>
                    <NavLink to={"/sneakers"}>Sandals</NavLink>
                    <NavLink to={"/belt"}>Sport Shoe</NavLink>
                    <NavLink to={"/contact"}>Trainers</NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to={"/bags"}>BAGS</NavLink>
          <NavLink to={"/sneakers"}>SNEAKERS</NavLink>
          <NavLink to={"/belt"}>BELT</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </ul>
      </div>
    </nav>
  );
};
