import { Box, Text } from "@chakra-ui/react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Text ml={1} fontSize={14}>
        Onkar Deshmukh &copy; Copyright {new Date().getFullYear()}
        </Text>
      </Box>

     
          
    </footer>
  );
};

export default Footer;
