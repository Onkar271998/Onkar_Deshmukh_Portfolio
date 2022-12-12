import { useContext, useEffect } from "react";
import { useState } from "react";
import styles from "../styles/section.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";
import { AuthContext } from "./Context";

function Courosel() {
  const { state, dispatch } = useContext(AuthContext);
  const [img, setimg] = useState(require(`../images/indiegogo2.png`));
  //
  const [img2, setimg2] = useState(require(`../images/n2.png`));
  const [img3, setimg3] = useState(require(`../images/e3.png`));
  const [img4, setimg4] = useState(require(`../images/t3.png`));
  const imgarr = [
    require(`../images/indiegogo1.png`),
    require(`../images/indiegogo2.png`),
    require(`../images/indiegogo3.png`),
    require(`../images/indiegogo4.png`),
  ];

  const imgarr2 = [
    require(`../images/n1.png`),
    require(`../images/n2.png`),
    require(`../images/n3.png`),
    require(`../images/n1.png`),
  ];

  const imgarr3 = [
    require(`../images/e1.png`),
    require(`../images/e2.png`),
    require(`../images/e3.png`),
    require(`../images/e1.png`),
  ];

  const imgarr4 = [
    require(`../images/t1.png`),
    require(`../images/t2.png`),
    require(`../images/t3.png`),
    require(`../images/t1.png`),
  ];

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i === 4) {
        i = 0;
      }
      setimg(imgarr[i]);

      setimg2(imgarr2[i]);
      setimg3(imgarr3[i]);
      setimg4(imgarr4[i]);
      i++;
    }, 5000);
  }, []);

  const onCloseindiegogo = () => {
    dispatch({ type: "closeindiegogo" });
  };

  const onClose = () => {
    dispatch({ type: "closesocloudy" });
  };
  return (
    <section id="projects">
      <Modal
        isOpen={state.isOpenNownetflix}
        onClose={() => dispatch({ type: "closenetflix" })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Violent-hope</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img2} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                It is clone of mytheresa.com ,A ecommerce website from that
                customer can shop different type of cloths accessories.
              </p>
              <p>Tech Stack:- HTML,CSS,Javascript,Reactjs, Express ,MongoDB</p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/Onkar271998/Violent-hope"
              >
                <Button
                  bg="#3f6ff5"
                  _hover={{ background: "white", color: "teal.500" }}
                  color="white"
                  size="sm"
                >
                  Source Code
                </Button>
              </a>
              <a target={"_blank"} href="https://violent-hope.netlify.app/">
                <Button
                  _hover={{ background: "white", color: "teal.500" }}
                  bg="#3f6ff5"
                  color="white"
                  size="sm"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          {/* <div className={styles.techList}>
            <div
              className={styles.techItem}
              title="HTML"
              style={{ marginLeft: "0px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/mongo.jpg`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="CSS"
              style={{ marginLeft: "25px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/redux.b3b939c66aecf7d53967.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="JS"
              style={{ marginLeft: "50px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/react.png`)}
                alt="err"
              />
            </div>
          </div> */}

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch({ type: "closenetflix" })}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={state.isOpenNowindiegogo}
        onClose={onCloseindiegogo}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Myhours.com</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img} alt="img" />
            </div>
            <br />
            <div className={styles.textdata}>
              <p>
                About My Hours is a cloud-based time tracking solution best
                suited for small teams and freelancers. This project is about
                building a time management app for the users .
              </p>
              <p>
                Tech Stack:- HTML,CSS,JS,React.js,Redux,Mongodb,Express,chakraUI
              </p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/Onkar271998/Myhours.com-clone"
              >
                <Button
                  bg="#3f6ff5"
                  _hover={{ background: "white", color: "teal.500" }}
                  color="white"
                  size="sm"
                >
                  Source Code
                </Button>
              </a>
              <a target={"_blank"} href="https://myhoursclone.vercel.app/">
                <Button
                  _hover={{ background: "white", color: "teal.500" }}
                  bg="#3f6ff5"
                  color="white"
                  size="sm"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseindiegogo}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={state.isOpenNowecom}
        onClose={() => dispatch({ type: "closeecom" })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bewakoof.com</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img3} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                It's a ecommerce Web-application which allows user to login and
                add products to cart.
              </p>
              <br />

              <br />
              <p>Tech Stack:-HTML,CSS,Javascript </p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/Onkar271998/Bewakoof.com"
              >
                <Button
                  bg="#3f6ff5"
                  _hover={{ background: "white", color: "teal.500" }}
                  color="white"
                  size="sm"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://clinquant-gingersnap-fd08a8.netlify.app/"
              >
                <Button
                  _hover={{ background: "white", color: "teal.500" }}
                  bg="#3f6ff5"
                  color="white"
                  size="sm"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch({ type: "closeecom" })}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={state.isOpenNowtranslator}
        onClose={() => dispatch({ type: "closetranslator" })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Translator App</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img4} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                It is translator app. which translate automaticaly and whenever
                you type something.
              </p>
              <p>Tech Stack:- HTML,CSS,Javascript,React.js</p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/Onkar271998/Translator-app"
              >
                <Button
                  bg="#3f6ff5"
                  _hover={{ background: "white", color: "teal.500" }}
                  color="white"
                  size="sm"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://lovely-alfajores-60a862.netlify.app/"
              >
                <Button
                  _hover={{ background: "white", color: "teal.500" }}
                  bg="#3f6ff5"
                  color="white"
                  size="sm"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch({ type: "closetranslator" })}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className={styles.projecttitile}>
        <h1>Projects</h1>
        <h5>
          Since I started working as a web developer I worked on many projects.
        </h5>
        <h5>Let’s dive into this now.</h5>
      </div>

      <div className={styles.container}>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img2} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Violent-hope</h3>
            <p>
              It is clone of mytheresa.com ,A ecommerce website from that
              customer can shop different type of cloths accessories.
            </p>
            <p>
              Tech Stack:- <br />
              HTML,CSS,Javascript,React.js,Express,MongoDB,ChakraUI
            </p>
          </div>
          <Box className={styles.techList}>
            <div
              className={styles.techItem}
              title="HTML"
              style={{ marginLeft: "0px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="CSS"
              style={{ marginLeft: "25px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html1.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="JS"
              style={{ marginLeft: "50px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/js.jpeg`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="React"
              style={{ marginLeft: "75px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/react.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="Redux"
              style={{ marginLeft: "100px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/redux.b3b939c66aecf7d53967.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="Node.Js"
              style={{ marginLeft: "120px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/node.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="Express"
              style={{ marginLeft: "150px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/express.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="MongoDB"
              style={{ marginLeft: "175px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/mongo.jpg`)}
                alt="err"
              />
            </div>
          </Box>
          <div className={styles.footer1}>
            <a target={"_blank"} href="https://violent-hope.netlify.app/">
              <Button
                bg="#3f6ff5"
                _hover={{ background: "white", color: "teal.500" }}
                color="white"
                size="sm"
              >
                Source Code
              </Button>
            </a>
            <a target={"_blank"} href="https://violent-hope.netlify.app/">
              <Button
                _hover={{ background: "white", color: "teal.500" }}
                bg="#3f6ff5"
                color="white"
                size="sm"
                ml="3px"
              >
                Open Live
              </Button>
            </a>

            <span
              onClick={() => dispatch({ type: "opennetflix" })}
              className={styles.footer}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Myhours.com</h3>
            <p>It is time tracking websites for projects in companies</p>
            <p>
              Tech Stack:-
              HTML,CSS,Javascript,React.js,Redux,Mongodb,Express,Chakra
            </p>
          </div>
          {/* <div className={styles.techList}>
              <div
                className={styles.techItem}
                title="HTML"
                style={{ marginLeft: "0px" }}
              >
                
                <img
                  className={styles.techItemImage}
                  src={require(`../images/html.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="CSS"
                style={{ marginLeft: "25px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/html1.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="JS"
                style={{ marginLeft: "50px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/js.jpeg`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="React"
                style={{ marginLeft: "75px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/react.png`)}
                  alt="err"
                />
              </div>
              
              
           

           
              
            </div>  */}

          <Box className={styles.techList}>
            <div
              className={styles.techItem}
              title="HTML"
              style={{ marginLeft: "0px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="CSS"
              style={{ marginLeft: "25px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html1.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="JS"
              style={{ marginLeft: "50px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/js.jpeg`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="React"
              style={{ marginLeft: "75px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/react.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="Redux"
              style={{ marginLeft: "100px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/redux.b3b939c66aecf7d53967.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="Node.Js"
              style={{ marginLeft: "120px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/node.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="Express"
              style={{ marginLeft: "150px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/express.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="MongoDB"
              style={{ marginLeft: "175px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/mongo.jpg`)}
                alt="err"
              />
            </div>
          </Box>

          <div className={styles.footer1}>
            <a
              target={"_blank"}
              href="https://github.com/Onkar271998/Myhours.com-clone"
            >
              <Button
                bg="#3f6ff5"
                _hover={{ background: "white", color: "teal.500" }}
                color="white"
                size="sm"
              >
                Source Code
              </Button>
            </a>
            <a target={"_blank"} href="https://myhoursclone.vercel.app/">
              <Button
                _hover={{ background: "white", color: "teal.500" }}
                bg="#3f6ff5"
                color="white"
                size="sm"
                ml="3px"
              >
                Open Live
              </Button>
            </a>

            <span
              onClick={() => dispatch({ type: "openindiegogo" })}
              className={styles.footer}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img3} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Bewakoof.com </h3>
            <p>
              It's a ecommerce Web-application which allows user to login and
              add products to cart.
            </p>
            <p>
              Tech Stack:- <br />
              HTML,CSS,Javascript
            </p>
          </div>
          <div className={styles.techList}>
            <div
              className={styles.techItem}
              title="HTML"
              style={{ marginLeft: "0px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="CSS"
              style={{ marginLeft: "25px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html1.png`)}
                alt="CSS"
              />
            </div>
            <div
              className={styles.techItem}
              title="JS"
              style={{ marginLeft: "50px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/js.jpeg`)}
                alt="err"
              />
            </div>
          </div>

          <div className={styles.footer1}>
            <a
              target={"_blank"}
              href="https://github.com/Onkar271998/Bewakoof.com"
            >
              <Button
                bg="#3f6ff5"
                _hover={{ background: "white", color: "teal.500" }}
                color="white"
                size="sm"
              >
                Source Code
              </Button>
            </a>
            <a
              target={"_blank"}
              href="https://clinquant-gingersnap-fd08a8.netlify.app/"
            >
              <Button
                _hover={{ background: "white", color: "teal.500" }}
                bg="#3f6ff5"
                color="white"
                size="sm"
                ml="3px"
              >
                Open Live
              </Button>
            </a>

            <span
              onClick={() => dispatch({ type: "openecom" })}
              className={styles.footer}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img4} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Translator App</h3>
            <p>
              It is translator app. which translate automaticaly and whenever
              you type something.
            </p>
            <p>
              Tech Stack:- <br />
              HTML,CSS,Javascript,React.js
            </p>
          </div>
          <div className={styles.techList}>
            <div
              className={styles.techItem}
              title="HTML"
              style={{ marginLeft: "0px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="CSS"
              style={{ marginLeft: "25px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/html1.png`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="JS"
              style={{ marginLeft: "50px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/js.jpeg`)}
                alt="err"
              />
            </div>
            <div
              className={styles.techItem}
              title="React"
              style={{ marginLeft: "75px" }}
            >
              <img
                className={styles.techItemImage}
                src={require(`../images/react.png`)}
                alt="err"
              />
            </div>
          </div>
          <div className={styles.footer1}>
            <a
              target={"_blank"}
              href="https://github.com/Onkar271998/Translator-app"
            >
              <Button
                bg="#3f6ff5"
                _hover={{ background: "white", color: "teal.500" }}
                color="white"
                size="sm"
              >
                Source Code
              </Button>
            </a>
            <a
              target={"_blank"}
              href="https://lovely-alfajores-60a862.netlify.app/"
            >
              <Button
                _hover={{ background: "white", color: "teal.500" }}
                bg="#3f6ff5"
                color="white"
                size="sm"
                ml="3px"
              >
                Open Live
              </Button>
            </a>

            <span
              onClick={() => dispatch({ type: "opentranslator" })}
              className={styles.footer}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Courosel;
