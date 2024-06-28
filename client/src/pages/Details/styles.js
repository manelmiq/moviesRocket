import styled from "styled-components";

export const Main = styled.div`
  > .mainTitle {
    margin-top: 24px;
    display: flex;
    gap: 19px;
    align-items: center;
    animation: skew 2.5s ease-in-out;

    > h1 {
      font-size: 36px;
      font-weight: 600;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    > .rating {
      color: ${({theme}) => theme.COLORS.PINK};
      display: block;
    }

    > .rating input {
      display: none;
    }
    
    > .rating label {
      float: right;
      cursor: pointer;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      transition:  color 0.3s;
      margin-right: 10px;
    }

    > .rating input:checked ~ label,
    .rating label:hover,
    .rating label:hover ~ label {
      color: ${({theme}) => theme.COLORS.PINK};
      transition: color 0.3s;
    }
  }

  > .info {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    font-family: "Roboto", sans-serif;

    > img {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      border: 1px solid ${({theme}) => theme.COLORS.PURPLE_BORDER};
    }

    > p a {
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    > svg {
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  > .tags {
    display: flex;
    margin: 40px 0;
    gap: 8px;
    height: 30px;
  }

  > .desc {
    animation: showUp 3s ease-in-out;
  }


  @keyframes skew {
    0% {
      translate: -10px;
      opacity: 0;
    }
    30% {
      translate: 10px;
    }
    50% {
      transform: skew(5deg);
    }
  }
  @keyframes showUp {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0.3;
    }
    75% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

