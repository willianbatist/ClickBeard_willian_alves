import {
  HeaderCustomerContainer,
  NavContainer,
  MobileMenuContainer,
} from './headerCustomer.styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function HeaderCustomer() {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleLogout = () => {
    logout();
    navigate('/login');
    onClose();
  };

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  const menuItems = [
    { label: 'Agendar', path: '/' },
    { label: 'Meus agendamentos', path: '/my-schedules' },
  ];

  if (isMobile) {
    return (
      <MobileMenuContainer>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={4}>
          <Text fontSize="lg" fontWeight="bold" color="#18382d">
            ClickBeard
          </Text>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            colorScheme="green"
            size="lg"
            aria-label="Abrir menu"
          />
        </Box>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody marginTop="20px">
              <VStack spacing={4} align="stretch" mt={4}>
                {menuItems.map((item, index) => (
                  <Box
                    key={index}
                    p={3}
                    borderRadius="md"
                    cursor="pointer"
                    _hover={{ bg: '#f0f8f0', color: '#84a98c' }}
                    onClick={() => handleNavigate(item.path)}
                  >
                    <Text fontSize="md" fontWeight="600" color="#18382d">
                      {item.label}
                    </Text>
                  </Box>
                ))}
                <Box
                  p={3}
                  borderRadius="md"
                  cursor="pointer"
                  _hover={{ bg: '#f8f0f0', color: '#d69e2e' }}
                  onClick={handleLogout}
                  borderTop="1px solid #e2e8f0"
                  mt={4}
                >
                  <Text fontSize="md" fontWeight="600" color="#e53e3e">
                    Sair
                  </Text>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MobileMenuContainer>
    );
  }

  return (
    <HeaderCustomerContainer>
      <NavContainer>
        <ul>
          <li>
            <Link onClick={() => navigate('/')}>Agendar</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/my-schedules')}>Meus agendamentos</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Sair</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderCustomerContainer>
  );
}

export default HeaderCustomer;
