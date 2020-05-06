import styled from "styled-components";
import { motion } from "framer-motion";

export const ClipedDiv = styled.div`
  height: 150px;
  width: 100%;
  background: #000000;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  position: absolute;
  top: -1px;
  left: 0;
`;

export const HeadingFirst = styled(motion.h1)`
  position: absolute;
  left: 25px;
  top: -20px;
  color: ${(props) => props.theme.background};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: monospace;  
  font-size: 1.5em;
  }
`;

export const HeadingSecond = styled(motion.h1)`
  position: absolute;
  right: 25px;
  bottom: -20px;
  color: ${(props) => props.theme.colors.normal};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: monospace;
  font-size: 1.5em;
  }
`;
