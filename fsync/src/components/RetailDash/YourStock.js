import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { IoIosRedo } from "react-icons/io";
import { useContext, useEffect } from 'react'
import {GetStock, ModifyQuantity} from '../../sockets/emits'
import SocketContext from '../../utilities/SocketContext'

const YourStock = (prop) => {
  const { inventory } = useContext(SocketContext);

  // TODO: When the quantity changes, emit the new quantity: ModifyQuantity
      // Payload object:
        // productID : id of product to modify
        // brandID : email of brand
        // email: retailer email
        // newQuantity: new quantity

  useEffect(() => {
      // Payload:
      // retailID: email of retailer
      // brandID: email of brand
      // type: "retail" or "brand"
      
      // Ask the backend for the current retailer's inventory
      let payload = {
        retailID: prop.retailID,
        brandID: prop.brandID,
        type: prop.type
      }
      // Get the inventory of the current retailer
    GetStock(payload);
  },[])

  const header = [
    "Item Name",
    "ID",
    "Size",
    "Color",
    "Units Available",
    "Action",
  ];

  const data = [
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Units Available": 10,
    },
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Units Available": 10,
    },
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Units Available": 10,
    },
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Units Available": 10,
    },
  ];
  return (
    <Flex w="full" p={50} alignItems="center" justifyContent="center">
      <Table
        w="full"
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {data.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
              >
                {Object.keys(token).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                          textTransform: "uppercase",
                          color: "black",
                          fontSize: "xs",
                          fontWeight: "bold",
                          letterSpacing: "wider",
                          fontFamily: "heading",
                        }}
                      >
                        {x}
                      </Td>
                      <Td color="black" fontSize="md" fontWeight="hairline">
                        {token[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    },
                    textTransform: "uppercase",
                    color: "black",
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "wider",
                    fontFamily: "heading",
                  }}
                >
                  Action
                </Td>
                <Td>
                  <Button
                    variant="solid"
                    colorScheme="blackAlpha"
                    bg="black"
                    size="sm"
                    spacing={3}
                    leftIcon={<IoIosRedo />}
                  >
                    Return
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default YourStock;
