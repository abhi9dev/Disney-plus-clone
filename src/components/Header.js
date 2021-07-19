import styled from "styled-components";
import { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/users/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <HeaderBar>
      <DisneyLogo>
        <img src="/images/logo.png" />
      </DisneyLogo>

      {!username ? (
        <LoginButton onClick={handleAuth}>LOGIN</LoginButton>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.png" />
              <span>HOME</span>
            </a>

            <a>
              <img src="/images/search-icon.png" />
              <span>SEARCH</span>
            </a>

            <a>
              <img src="/images/watchlist-icon.png" />
              <span>WATCHLIST</span>
            </a>

            <a>
              <img src="/images/original-icon.png" />
              <span>ORIGINALS</span>
            </a>

            <a>
              <img src="/images/movie-icon.png" />
              <span>MOVIES</span>
            </a>

            <a>
              <img src="/images/series-icon.png" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} />
            <DropDown>
              <span z-index="4" onClick={handleAuth}>
                Sign out
              </span>
            </DropDown>
          </SignOut>
        </>
      )}
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 4;
  overflow: hidden;
`;

const DisneyLogo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const LoginButton = styled.button`
  color: white;
  font-size: 20px;
  letter-spacing: 1.5px;
  margin: 1rem;
  min-height: 3rem;
  min-width: 100px;
  background-color: transparent;
  border-radius: 5px;

  &:hover {
    color: #090b13;
    background-color: rgb(249, 249, 249);
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    margin: 0 12px;
    cursor: pointer;

    img {
      height: 25px;
      min-width: 25px;
      width: 20px;
      z-index: 2;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        position: absolute;
        content: "";
        left: 0px;
        right: 0px;
        height: 2px;
        width: auto;
        border-radius: 0 0 4px 4px;
        background-color: rgb(249, 249, 249);
        opacity: 0;
        bottom: -6px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  opacity: 0;
  position: absolute;
  top: 48px;
  right: 0px;
  width: 95px;
  background-color: rgb(19, 19, 19);
  letter-spacing: 2px;
  font-size: 18px;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 6px;
  padding: 5px;
  z-index: 5;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
