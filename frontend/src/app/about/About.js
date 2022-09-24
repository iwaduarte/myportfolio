import React from 'react';
import styles from './About.module.css';
import Title from '../_components/Title/Title';
import Container from '../_components/Container/Container';

const { inlineBlock, body, content } = styles;

const About = () => (
  <Container>
    <Title titleName="About me" />
    <div class={body}>
      <div>
        <h1 className={inlineBlock}> Everyone has a story worth to sharing. </h1> <small> ( 📒 4 minute read )</small>
      </div>
      <h4> Thus a unique tale... </h4>
      <img src="/meee.jpg" alt="The kid" style={{ width: '85%' }} />
      (Text aid by GitHub copilot)
      <div className={content}>
        <p>
          See that beautiful kid over here. He is a nice kid. He had dreams that didn't come true and yet he did not
          give up.
        </p>
        <p>
          This kid was introduced to computers early on in his life. At age of 8? Maybe 9? Hard to remember. He was
          curious about and fascinated by it. His dad brought up and probably mentioned the magic word: games. He did
          not understand much. It was an era which people in his country did not have access to computers. Internet was
          limited to rich people and a few lucky households and did not seem much. Although he was one of these lucky
          ones, he was mostly clueless about what everything was about. However, he still persevered and maintained his
          curiosity.
        </p>
        <p>
          The kid grow up a little bit to be part of the most revolutionary computer advancements in history. He started
          searching and reading as much as he could and he started getting a gist of the whole thing. He was a noob. A
          happy one too. He could download games, type a few commands in DOS, make PowerPoint presentations, search for
          things and download software on the internet. He was content with his life.
        </p>
        <p>
          In high school, he started seeking more knowledge. Orkut, Google, and website development were at the frontier
          and he wanted to be part of it. More than everything he wanted to be a "hacker" and be respected by all.
          "Unfortunately", all tutorials that he could read did not work (how to impress your friends with their CD-ROM
          drive coming out of the tray). The pages were ludicrous and full of fun but for him somehow it appeared
          magical. The ability to understand machines and make them do what you want.
        </p>
        <p> He did not speak any English so most of his knowledge was limited to his mother tongue.</p>
        <p>
          He grows up to become a Computer Engineer. It was a very hard path. Full of struggles, and bad decisions but
          he kept on. One moment he almost left everything because he wanted to travel and see the world, somehow and
          with their parents guidance he managed to finish his degree. Maybe he would need that knowledge for the
          future.
        </p>
        <p>
          He was not the best but was eager to learn. He thought that he needed to have access to the core of knowledge
          and for that, he needed to learn English. The language that would open the gates to the world of technology.
          The language that would show him the wonders. That would make him a good developer.
        </p>
        <p> The boy flew to Australia. To live a dream. With less than A$2.000 in his bank account. </p>
        <p>
          He became a construction laborer, a gardener, a waiter, and a casino dealer. He worked in every job that gave
          him money to pay for his English studies in Australia. The boy was becoming a man.
        </p>
        <p>
          To grow as a person and to become a decent programmer he went for the battle. Once, he went to the Google door
          and asked to be hired for the amusement of the receptionist that asked him politely to leave. He annoyed
          someone at Canva asking to give him a chance. He learned when he was not working. He cold-called people. Sent
          thousands of resumes. Nothing seemed to work
        </p>
        <p>
          They say that they give you what you need and not what you want. And with this kid was no different. He was
          given the opportunity to work in his field.
        </p>
        <p> An opportunity to work for free was given. To help great people create a great product. </p>
        <p>
          He embraced the journey. He was offered a mentorship that showed him paths that he did not think were
          possible. He worked long hours. 16 sometimes. 12 hours straight most of the time. He absorbed knowledge. He
          got obsessed with the work. He wanted to master the profession. The boy helped the business become reality. At
          one point he even had a team that he could mentor himself.
        </p>
        <p>
          The kid becomes a boy that becomes a man. He learned English at a decent level. He learned programming at a
          decent level. He learned some skills too. Most important he learned how to learn.
        </p>
        <p>Nowadays, the kid is still here. He is not a hacker. He is still a noob. And he is content with his life.</p>
      </div>
    </div>
    <div dangerouslySetInnerHTML={{ __html: '<! Text written in mid 2022 >' }} />
  </Container>
);

export default About;
