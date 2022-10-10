import { useColorModeValue, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  line-height: 20px;
`;

const Logo = () => {
  const footPrintImg = `/images/logo/logo${useColorModeValue(
    "",
    "-white"
  )}.svg`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={40} height={40} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="bold"
            fontSize={36}
            ml={3}
          >
            Dolor Domum
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
