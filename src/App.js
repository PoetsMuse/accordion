import { useState } from 'react';
import './styles.css';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "111Lorem ipsum dolor sit amet, blah blah lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem "
  },
  {
    title: "How long do I have to wait to receive my chair?",
    text: "222Lorem ipsum dolor sit amet, blah blah lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem "
  },
  {
    title: "Do you ship to the countries outside the EU?",
    text: "333Lorem ipsum dolor sit amet, blah blah lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem lorem "
  },
]

export default function App() {
  return (
    <div>
     <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}) {
  return (
    <div className='accordion'>
      {data.map((el, i)=><AccordionItem title={el.title} text={el.text} num={i} key={el.title} />)}
    </div>
  )
}
function AccordionItem({num, title, text}) {

 const [isOpen, setIsOpen] = useState(false)

 function handleToggle() {
  setIsOpen((isOpen) => !isOpen)
 }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className='content-box'>{text}</div>}
    </div>
  )
}