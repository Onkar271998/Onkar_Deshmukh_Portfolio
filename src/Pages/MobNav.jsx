import {
    Box,
    Button,
   
    Stack,
    Text,
    useDisclosure,
    useMediaQuery,
  } from "@chakra-ui/react";
  import styles from "../styles/MobNav.module.css";
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  } from "@chakra-ui/react";
  
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  const MobNav= () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSmallerThan700] = useMediaQuery("(max-width: 750px)");
  
    const handleScroll = (target) => {
      const targetElement = document.getElementById(target);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <header>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent textAlign={"center"} background={"#151418"}>
            <DrawerHeader
              bg="#151418"
              color="white"
              fontSize={"32px"}
              m="0px"
              borderBottomWidth="1px"
            >
             Onkar Deshmukh
            </DrawerHeader>
            <DrawerBody
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mb="35px"
            >
              <Stack direction={"column"} spacing={"18px"} alignItems={"center"}>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("about");
                      console.log("about");
                    }, 800)
                  )}
                >
                  <Text color={"white"} fontWeight={"bold"} fontSize={30}>
                    About
                  </Text>
                </Box>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("skills");
                      console.log("skills");
                    }, 800)
                  )}
                >
                  <Text color={"white"} fontWeight={"bold"} fontSize={30}>
                    Skills
                  </Text>
                </Box>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("projects");
                      console.log("projects");
                    }, 800)
                  )}
                >
                  <Text color={"white"} fontWeight={"bold"} fontSize={30}>
                    Projects
                  </Text>
                </Box>
                <Box
                  onClick={() => (
                    onClose(),
                    setTimeout(() => {
                      handleScroll("contact");
                      console.log("contact");
                    }, 800)
                  )}
                >
                  <Text color={"white"} fontWeight={"bold"} fontSize={30}>
                    Contact
                  </Text>
                </Box>
                <Box>     <a href="https://drive.google.com/file/d/1fQTXut_2hizUKcab-jPZx_NBdJWZFHZh/view?usp=share_link"><Button style={{backgroundColor:"#3f6ff5",color:"white" }} >Resume</Button></a></Box>
              </Stack>
              <div className={styles.socialicon}>
              <button>
                <a target={"_blank"} href="https://github.com/Onkar271998">
                  <img
                    src={require(`../images/github.png`)}
                    alt="Github"
                  />
                </a>
              </button>
  
              <button>
                <a href="mailto:Onkar271998@gmail.com">
                  <img src={require(`../images/download.png`)} alt="twitter" />
                </a>
              </button>
  
              <button>
                <a
                  target={"_blank"}
                  href="https://www.linkedin.com/in/onkar-deshmukh-6a89a8213/"
                >
                  <img
                    src="https://img.icons8.com/fluency/344/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </button>
            </div>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Button
                bg="#3f6ff5"
                color="white"
                variant="outline"
                mr={3}
                onClick={onClose}
                size="lg"
                _hover={{
                  background: "transparent",
                  color: "white",
                }}
              >
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <nav className={styles.navbar}>
          <Stack alignItems={"center"} direction={"row"} spacing={10}>
            {isSmallerThan700 ? (
              <Button className={styles.btn1} bg="transparent" onClick={onOpen}>
                <HamburgerIcon w={7} h={7} />
              </Button>
            ) : (
              ""
            )}
           
          </Stack>
          </nav>
         
           
             
  
           
      </header>
    );
  };
  
  export default MobNav;
  