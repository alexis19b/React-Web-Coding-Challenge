import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";
import { BiCalendarCheck } from "react-icons/bi";
import { RiPaletteLine } from "react-icons/ri";
export const Container = styled(Link)`
  display: flex;
  width: 86%;
  height: 150px;
  border: 2px solid gray;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: auto;
  margin-top: 7px;
  margin-bottom: 16px;
  text-decoration: none;
  color: inherit;
`;

export const ImageBici = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 190px;
    height: 100%;
  }
`;

export const ContainerText = styled.div`
  padding: 10px 0px 0px 20px;
  width: calc(100% - 190px);
  height: 150px;
  &:hover {
    background-color: #006dae;
    color: white;
  }
`;
export const Text = styled.div`
  h5 {
    display: inline-flex;
  }
  h3 {
    margin-bottom: 10px;
  }
`;
export const IconoMap = styled(SiGooglemaps)`
  font-size: 18px;
  margin-right: 8px;
  color: #302c3b;
`;

export const IconDate = styled(BiCalendarCheck)`
  margin-right: 8px;
  font-size: 18px;
  color: #302c3b;
`;
export const IconColor = styled(RiPaletteLine)`
  margin-right: 8px;
  font-size: 18px;
  color: #302c3b;
`;
