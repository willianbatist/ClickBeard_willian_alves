import { HeaderContainer, NavContainer, MobileMenuContainer } from './headerAdmin.styles';
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

function HeaderAdmin() {
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
    { label: 'Colaboradores', path: '/' },
    { label: 'Agendamentos', path: '/schedules' },
    { label: 'Barbeiro', path: '/register-barber' },
    { label: 'Especialidade', path: '/specialty' },
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
            <DrawerBody>
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
    <HeaderContainer>
      <NavContainer>
        <ul>
          <li>
            <Link onClick={() => navigate('/')}>Colaboradores</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/schedules')}>Agendamentos</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/register-barber')}>Barbeiro</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/specialty')}>Especialidade</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Sair</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}

export default HeaderAdmin;
