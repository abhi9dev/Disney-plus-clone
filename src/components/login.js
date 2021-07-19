import styled from "styled-components";

const login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.png" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Info>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Info>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

// contains the background photo when we login.
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

//contains the center body part of login page.
const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 100%;
  padding: 80px 40px;
  flex-direction: column;
`;

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  background-size: cover;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
`;

const CTALogoOne = styled.img`
  max-width: 600px;
  min-height: 100px;
  display: block;
  width: 100%;
  margin-bottom: 30px;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  max-width: 650px;
  text-align: center;
  margin-bottom: 2vw;
  width: 100%;
`;

const SignUp = styled.button`
  width: 90%;
  min-height: 80px;
  border-radius: 5px;
  background-color: #0063e5;
  border-color: #0063e5;
  text-align: center;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Info = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  width: fit-content;
  font-weight: bold;
  line-height: 1.5;
  margin: 0 0 24px;
  letter-spacing: 1.3px;
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
`;

export default login;
