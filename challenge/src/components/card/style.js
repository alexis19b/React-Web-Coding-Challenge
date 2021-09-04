import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 86%;
  height: 150px;
  border: 2px solid gray;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: auto;
  margin-bottom: 16px;
`;

export const ImageBici = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 190px;
    height: 100%;
    transition: all 0.5s ease-in-out;

    &:hover {
      width: 195px;
      height: 145px;
    }
  }
`;

export const ContainerText = styled.div`
  margin: 10px 0px 0px 20px;
`;
export const Text = styled.div`
  h5 {
    display: inline-flex;
  }
  h3 {
    margin-bottom: 10px;
  }
`;
