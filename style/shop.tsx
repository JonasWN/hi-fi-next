import styled from "styled-components";

interface LinksContainerIprops {
  size: string;
}

export const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

export const LinksContainer = styled.ul<LinksContainerIprops>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props: any) => props.size}, 1fr)
  );
  justify-items: center;
  grid-gap: 20px 0;
  font-size: 0.75em;
  padding: 0;
  font-size: 0.75em;
  li {
    width: 80px;
    text-align: center;
    height: auto;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
