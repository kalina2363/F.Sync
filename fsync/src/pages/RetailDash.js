import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
  Select
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import GlobalStates from "../utilities/GlobalStates";
import InStock from "../components/RetailDash/InStock";
import YourStock from "../components/RetailDash/YourStock";
import ToOrder from "../components/RetailDash/ToOrder";
import {GetAllBrands, GetStock, AddRetailer, CreateNewCompany, AddProductToRetail, CreateNewProduct, ModifyQuantity, GetValidRetail} from '../sockets/emits'
import SocketContext from '../utilities/SocketContext'

const RetailDash = () => {
  const DashContext = useContext(GlobalStates);
  const { retailerBrandslist } = useContext(SocketContext);

  useEffect(() => {
    let payload = DashContext.email;
    GetAllBrands(payload)
  },[])


  return (
    <Box>
      <HStack pt="2%" justify="space-around" >
        <Heading textTransform="uppercase">
          {DashContext.brandName}'s Portfolio
        </Heading>
        <Select placeholder="Choose Brand" variant="filled" width="30%" >
          {retailerBrandslist.map((brand) => {
            return (
              <option value={brand.email}>{brand.email}</option>
            )
          })}
          {/* <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option> */}
        </Select>
      </HStack>
      <Tabs
        variant="soft-rounded"
        colorScheme="blackAlpha"
        align="center"
        size="lg"
        pt="2%"
      >
        <TabList>
          <Tab>YOUR STOCK</Tab>
          <Tab>IN STOCK</Tab>
          <Tab>MADE TO ORDER</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <YourStock retailID = {DashContext.email} type = {DashContext.role} brandID = {DashContext.brandEmail}/>
          </TabPanel>
          <TabPanel>
            <InStock />
          </TabPanel>
          <TabPanel>
            <ToOrder />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RetailDash;
