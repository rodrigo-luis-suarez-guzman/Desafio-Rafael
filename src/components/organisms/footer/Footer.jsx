import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';


import { toggleTheme } from 'redux/reducers/appSlice';
import { withTranslation } from 'react-i18next';
import SwitchButton from 'components/atoms/buttons/SwitchButton';

const StyledFooterContainer = styled.footer`
    flex: 0 0 7rem;
    margin-top: auto;
    display: flex;
    align-items: center;
    max-width: 100%;
    background-color: ${({theme}) => theme.secondaryBgColor};
    border-top: 0.3rem solid ${({theme}) => theme.colors.red};

    > *{
        flex: 1;
    }

    > :last-child > * {
        margin-left: auto;
    }

    ${({ theme }) => theme.breakpoints.sm} {
        flex-direction: column;

        > :first-child {
            margin-bottom: 2rem;
        }

        > :nth-child(2) {
            order: 3;
            margin-top: 2rem;
        }

        > :last-child > * {
            margin-left: unset;
        }
    }
`;

const StyledCenterItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;


const Footer = ({t}) => {
    const {preferences: {theme}} = useSelector(({app}) => app);
    const dispatch = useDispatch();

    return (
        <StyledFooterContainer>
            <div>
                <SwitchButton isOn={theme === 'dark'} onClick={() => dispatch(toggleTheme())} leftIcon='' rightIcon='' />
            </div>
            <StyledCenterItem>
               
                <p>{t('')}</p>
            </StyledCenterItem>
         
        </StyledFooterContainer>
    );
};

Footer.propTypes = { 
    t: PropTypes.func,
};

export default withTranslation()(Footer);
