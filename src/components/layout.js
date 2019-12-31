import React from "react"
import {Global,css} from "@emotion/core"
import styled from "@emotion/styled"
import {Icons} from "../assets/allicons"


const NavTitle = styled.span`
    font-family:"cooper hewitt";
    font-weight:700;
    font-style:italic;
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:1.2rem;
    transform:translateY(0.2rem);
`
const SubNavs = ()=>{
    return (
      <div
        css={css`
          font-size: 1rem;
          display: flex;
          justify-content: flex-end;
          font-family: "cooper hewitt";
          font-weight: 500;
          & > span{
              margin-left:2rem;
          }
        `}
      >
        <span>title</span>
        <span>goal</span>
        <span>suffer</span>
        <span>skills</span>
      </div>
    )
}

const MainContent = ()=>{

}



const Layout = ()=>{
    
    return (
      <>
        <Global
          styles={css`
            html {
              padding: 0;
              margin: 0;
              & * {
                box-sizing: border-box;
              }
            }
            body {
              padding: 0;
              margin: 0;
            }
            #gatsby-focus-wrapper{
                padding:0.5rem;
            }
          `}
        ></Global>
        <header css={css`
            display:flex;
            justify-content:space-between;
            align-items:center;
            border:1px solid red;
            height:2.5rem;
        `}>
            <Icons.NavIcon></Icons.NavIcon>
            <NavTitle>Who am i</NavTitle>
        </header>
        <main css={css`
         border:1px solid blue;
        `}>
            <SubNavs css={css`
                font-size:3rem;
            `}></SubNavs>

        </main>
      </>
    )
}
export default Layout