import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";


export default function ListingsDrop() {
    return(

        <DropdownButton title="Select a branch">
            <Dropdown.Item>
                Central London

            </Dropdown.Item>
            <Dropdown.Item>
                North London
                
                </Dropdown.Item>
                <Dropdown.Item>
                    South London
                
                </Dropdown.Item>

        </DropdownButton>

    )
}