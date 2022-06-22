import MainButton from '@components/Buttons/MainButton';
import { Row, Col } from '@components/FlexboxGrid';
import Form from '@components/Forms/Form';
import { useForm } from '@hooks/use-form';
import { HomeSectionHeader, HomeSectionWrapper } from '@styles/common.styles';
import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';

interface IProps {}

const HomeContactInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HomeInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  > p {
    font-size: 1.6rem;
    font-weight: 200;
  }
`;

const HomeContactFrom = styled.div`
  button {
    border-radius: 3px;
  }
`;

const Style = {
  HomeContactInfoList,
  HomeContactFrom,
  HomeInfoItem,
};

const HomeContact = ({}: IProps) => {
  const { values, handleChange } = useForm({ name: '', email: '' });

  return (
    <HomeSectionWrapper id="home-contact">
      <Row>
        <Col tablet={12}>
          <HomeSectionHeader>Contact info</HomeSectionHeader>
          <Row>
            <Col>
              <Style.HomeContactInfoList>
                <li>
                  <Style.HomeInfoItem>
                    <FaLocationArrow />
                    <p>Cracow, Poland</p>
                  </Style.HomeInfoItem>
                </li>
                <li>
                  <Style.HomeInfoItem>
                    <FaPhone />
                    <p>
                      <a href="tel:+48690346759">+(48)690346759</a>
                    </p>
                  </Style.HomeInfoItem>
                </li>
                <li>
                  <Style.HomeInfoItem>
                    <FaEnvelope />
                    <p>
                      <a href="mailto:rafalpisarczyk@gmail.com">
                        rafalpisarczyk@gmail.com
                      </a>
                    </p>
                  </Style.HomeInfoItem>
                </li>
              </Style.HomeContactInfoList>
            </Col>
          </Row>
        </Col>
        <Col tablet={12}>
          <HomeSectionHeader>Contact form</HomeSectionHeader>
          <Style.HomeContactFrom>
            <Form
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
                toast('Email send !', {
                  theme: 'dark',
                  autoClose: 2000,
                  type: 'success',
                  position: 'bottom-right',
                });
              }}
            >
              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Your name*"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Subject*"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    placeholder="Phone*"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Your Message ..."
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <MainButton type="submit">Send</MainButton>
                </Col>
              </Row>
            </Form>
          </Style.HomeContactFrom>
        </Col>
      </Row>
    </HomeSectionWrapper>
  );
};

export default HomeContact;
