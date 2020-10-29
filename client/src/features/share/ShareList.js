import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ViewPort, LeftResizable, Fill, Right, Info } from 'react-spaces';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ProfileBar from './ProfileBar';
import Showcase from './Showcase';
import ContentItem from '../content/ContentItem'; // Component probably needs to be edited to suit share view
import Section from './Section';
import Skeleton from 'react-loading-skeleton';

import TopNav from '../layout/TopNav';
import Nav from 'react-bootstrap/Nav';
import NavLink from '../layout/NavLink';

import { getShareId } from '../../common/helpers';

import { getSharepage } from '../share/shareSlice';
import * as fakeData from '../../_mockapi/data';

export default function Share() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [_newShare, updateNewSharepage] = useState();

  console.log("bruh");
  console.log(user);
  console.log(user.sharePages);

  return(
      <>
        <br/>
        <Nav className="flex-column">
        <h1> Sharepages: </h1>
          <>
          {user.sharePages.map((sharepage, index) => (
            <>
            <hr/>
            <Nav.Item>
                <NavLink to={`/share/${sharepage}`} activeOnlyWhenExact={true} label={<>
                    <h4 style={{ textDecorationLine: 'underline' }}> {sharepage} </h4>
                </>}/>
            </Nav.Item>
            </>
          ))}
        </>
        </Nav>
      </>
  );
}
