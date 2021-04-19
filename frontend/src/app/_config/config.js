import {
  ApiGatewayIcon,
  CloudWatchIcon,
  EC2Icon,
  IAMIcon,
  LambdaIcon,
  OrganizationsIcon,
  RDSIcon,
  S3Icon,
  SESIcon,
  SNSIcon,
  SQSIcon
} from './images';

const projects = [
  { title: 'Web application using api', icon: '🕸️', label: 'spider-web-emoji' },
  { title: 'Brochure site', icon: '📰 ', label: 'newspaper-emoji' },
  { title: 'E-commerce site', icon: '💰', label: 'bag-emoji' },
  { title: 'Personal portfolio', icon: '🧔', label: 'man-emoji' },
  { title: 'Simple game', icon: '🕹', label: 'joystick-emoji' },
  { title: 'Movie search  (with hooks)', icon: '🎥', label: 'camera-emoji' },
  { title: 'Build a chat app', icon: '💬', label: 'chat-emoji' },
  { title: 'Beautiful weather app', icon: '🌡', label: 'weather-emoji' },
  { title: 'Multi-language blog', icon: '    🌎', label: 'earth-emoji' },
  {
    title: 'Build an e-commerce shopping cart with Next.js',
    icon: '🛒 ',
    label: 'shopping-cart-emoji'
  },
  { title: 'Customizable Rich-Text Editor', icon: '📝', label: 'memo-emoji' },
  { title: 'CPU Activity Monitor', icon: '   🧠', label: 'brain-emoji' },
  { title: 'Spotify Music Clone', icon: '   📻 ', label: 'radio-emoji' },
  { title: 'Calendar Application', icon: '  📅', label: 'calendar-emoji' },
  {
    title: 'Display and filter GitHub Repositories',
    icon: '   💻',
    label: 'laptop-emoji'
  },
  {
    title: 'Develop your own authentication middleware node js',
    icon: '   📗',
    label: 'green-book-emoji'
  }
];

const videosList = {
  0: 'https://www.youtube.com/embed/iG9CE55wbtY?start=1',
  1: 'https://www.youtube.com/embed/TXfltmzRG-g?start=1',
  2: 'https://www.youtube.com/embed/8EUy_82IChY?start=1',
  3: 'https://www.youtube.com/embed/UFydagCS9fg?start=1',
  4: 'https://www.youtube.com/embed/lzc1O8-yQtU?start=1',
  5: 'https://www.youtube.com/embed/l8rQNdBmPek?start=1',
  6: 'https://www.youtube.com/embed/l-gQLqv9f4o?start=1',
  7: 'https://www.youtube.com/embed/vBkBS4O3yvY?start=1',
  8: 'https://www.youtube.com/embed/BKorP55Aqvg?start=1',
  9: 'https://www.youtube.com/embed/E91bGT9BjYk?start=1',
  10: 'https://www.youtube.com/embed/IesIsKMjB4Y?start=1',
  11: 'https://www.youtube.com/embed/WfGMYdalClU?start=1',
  12: 'https://www.youtube.com/embed/e9dZQelULDk?start=1',
  13: 'https://www.youtube.com/embed/LOUf8Z0RQic?start=1'
};

const awsLinks = [
  {
    href: 'https://aws.amazon.com/s3/',
    title: 'AWS S3',
    src: S3Icon,
    alt: 'Logo S3'
  },
  {
    href: 'https://aws.amazon.com/ec2/',
    title: 'AWS EC2',
    src: EC2Icon,
    alt: 'Logo EC2'
  },
  {
    href: 'https://aws.amazon.com/sqs/',
    title: 'AWS SQS',
    src: SQSIcon,
    alt: 'Logo SQS'
  },
  {
    href: 'https://aws.amazon.com/ses/',
    title: 'AWS SES',
    src: SESIcon,
    alt: 'Logo SES'
  },
  {
    href: 'https://aws.amazon.com/sns/',
    title: 'AWS SNS',
    src: SNSIcon,
    alt: 'Logo SNS'
  },
  {
    href: 'https://aws.amazon.com/rds/',
    title: 'AWS RDS',
    src: RDSIcon,
    alt: 'Logo RDS'
  },
  {
    href: 'https://aws.amazon.com/iam/',
    title: 'AWS IAM',
    src: IAMIcon,
    alt: 'Logo IAM'
  },
  {
    href: 'https://aws.amazon.com/lambda/',
    title: 'AWS Lambda',
    src: LambdaIcon,
    alt: 'Logo Lambda'
  },
  {
    href: 'https://aws.amazon.com/api-gateway/',
    title: 'API Gateway',
    src: ApiGatewayIcon,
    alt: 'Logo API Gateway'
  },
  {
    href: 'https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.html',
    title: 'AWS Cloudwatch',
    src: CloudWatchIcon,
    alt: 'Logo Cloudwatch'
  },
  {
    href: 'https://aws.amazon.com/organizations/',
    title: 'AWS Organizations',
    src: OrganizationsIcon,
    alt: 'Logo Organizations'
  }
];

export { videosList, projects, awsLinks };
