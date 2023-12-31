import { Container, Box, Flex } from "@chakra-ui/react";
import { SignOutButton } from "features/auth/views/SignOutButton";
import { useAuth } from "features/auth/useAuth";
import { MainButton } from "components/button/MainButton";

export const Header: React.FC = () => {
  const { isSignedIn } = useAuth();
  return (
    <Box as="header" position="sticky" top="0" bg="white" zIndex="1" boxShadow="xs">
      <Container maxW="container.md">
        <Flex justifyContent="space-between" alignItems="center">
          <MainButton link="/" fontSize={{ base: "lg", sm: "2xl" }}>
            Twitter Clone
          </MainButton>

          {isSignedIn ? (
            <SignOutButton />
          ) : (
            <Box>
              <MainButton link="/auth/SignIn" fontSize="sm" colorScheme="gray">
                ログイン
              </MainButton>
              <MainButton link="/auth/SignUp" fontSize="sm" colorScheme="gray">
                アカウント新規登録
              </MainButton>
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
