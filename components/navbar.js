import NextLink from "next/link";
import {
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Flex,
  Box,
  Link,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./logo.js";
import React from "react";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? "primary4" : undefined}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      as="nav"
      w="100%"
      bg="primary2"
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Box
        display="flex"
        p={2}
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Box display="flex">
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "100%" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, nmd: 0 }}
          >
            <LinkItem href="/" path={path}>
              Home
            </LinkItem>
            <LinkItem href="/heat-pumps" path={path}>
              Heat pumps
            </LinkItem>
            <LinkItem href="/solar" path={path}>
              Solar
            </LinkItem>
            <LinkItem href="/about" path={path}>
              About
            </LinkItem>
          </Stack>

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList zIndex={1000}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/heat-pumps" passHref>
                  <MenuItem as={Link}>Heat pumps</MenuItem>
                </NextLink>
                <NextLink href="/solar" passHref>
                  <MenuItem as={Link}>Solar</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
