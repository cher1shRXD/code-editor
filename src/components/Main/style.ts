import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color:#2b2b2b;
`;

export const Header = styled.div`
  width:100%;
  height:4rem;
  display:flex;
  align-items:center;
  gap:0.5rem;
  padding:0 1rem;
  box-sizing:border-box;
`
export const Title = styled.p`
  font-size:1.3rem;
  color:white;
  cursor: pointer;
`
export const Back = styled.img`
  width:1.5rem;
  height:1.5rem;
  object-fit:contain;
  object-position:center;
`

export const Main = styled.div`
  width:100%;
  height:calc(100vh - 9rem);
  display:flex;
  justify-content:center;
  align-items:center;
  gap:1rem;
  padding: 0 1rem;
  box-sizing:border-box;
`
export const ProblemWrap = styled.div`
  flex:1;
  height:100%;
  background-color:#F1F1F1;
  padding:1rem;
  box-sizing:border-box;
  font-size:2rem;
  overflow:scroll;
`

export const SubmitWrap = styled.div`
  width:100%;
  height:5rem;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding:0 1rem;
  box-sizing:border-box;
  gap:1rem;
`

export const Button = styled.button<{color:string,$textcolor:string,$activecolor:string}>`
  font-size:1.2rem;
  padding: 0.6rem 1rem;
  border-radius:0.2rem;
  background-color:${props=>props.color};
  color:${props=>props.$textcolor};
  outline:none;
  border:none;
  cursor: pointer;
  &:active{
    background-color:${props=>props.$activecolor};
  }
`