import { ArrowRight } from "lucide-react";

import Accordion from "./Accordion";

import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image1 from "../assets/1.jpg";
import Description from "./Description";

const Service = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[110vh]   ">
        <img
          className="row-span-3  w-full h-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg "
          src={image2}
          alt="AudioVisual"
        />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" mt-10 translate font-median flex items-center justify-center gap-2 rounded ">
            <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
              Todos serviços
            </h2>

            <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
          </button>
        </a>

        <Accordion
          className=""
          title="AudioVisual SOMOS MARKETEIROS!!"
          answer="Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
        pulvinar pulvinar varius."
        />

        <img
          className="row-span-3 object-cover w-full h-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg "
          src={image1}
          alt="Marketing"
        />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-10 translate font-median flex items-center justify-center gap-2 rounded ">
            <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
              Todos serviços
            </h2>

            <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
          </button>
        </a>

        <Accordion
          title="Marketing SOMOS MARKETEIROS!!"
          answer="Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
              pulvinar pulvinar varius."
        />

        <img
          className="row-span-3 object-cover w-full h-full p-2 transition-transform transform hover:scale-110 hover:shadow-lg "
          src={image3}
          alt="Tecnologia"
        />

        <a
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" mt-10 translate font-median flex items-center justify-center gap-2 rounded ">
            <h2 className=" animate-blink text-base font-bold text-base-global-blue-600 ">
              Todos serviços
            </h2>

            <ArrowRight className=" order-0 ml-auto h-4 w-4 flex-none  text-base-global-blue-600  hover:text-base-global-blue-700" />
          </button>
        </a>
        <Accordion
          title="Tecnologia SOMOS MARKETEIROS!!"
          answer="Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing
              pulvinar pulvinar varius."
        />
      </div>

      {/* Right Side */}
      <div className=" text-base-font-warning-500 flex flex-col h-full justify-center">

        
      <strong className="  flex items-center gap-2 text-custom font-bold leading-custom text-base-font-dark-800 ">
        <span className=" text-1xl font-bold  lg:text-2xl ">
          Tudo que você precisa para
        </span>
        <svg
          className="animate-blink"
          width={240}
          height={40}
          viewBox="0 0 240 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.912 27.288c-3.504 0-5.976-2.592-5.976-6.096s2.472-6.072 5.976-6.072c2.28 0 3.624.96 4.44 2.064l-1.656 1.512c-.648-.912-1.536-1.344-2.664-1.344-2.088 0-3.504 1.584-3.504 3.84s1.416 3.864 3.504 3.864c1.128 0 2.016-.48 2.664-1.392l1.656 1.56c-.816 1.08-2.16 2.064-4.44 2.064zM16.134 27h-2.52V15.408h2.52v1.68c.888-1.104 2.28-1.968 3.768-1.968v2.496a3.478 3.478 0 00-.768-.072c-1.08 0-2.496.72-3 1.56V27zm7.101-13.008c-.864 0-1.56-.696-1.56-1.56 0-.864.696-1.56 1.56-1.56.864 0 1.56.696 1.56 1.56 0 .864-.696 1.56-1.56 1.56zM24.483 27h-2.52V15.408h2.52V27zm12.922 0h-2.52v-1.272c-.864 1.008-2.232 1.56-3.768 1.56-1.872 0-4.008-1.296-4.008-3.84 0-2.688 2.112-3.792 4.008-3.792 1.584 0 2.904.504 3.768 1.488v-1.728c0-1.344-1.128-2.16-2.712-2.16-1.296 0-2.448.48-3.432 1.488l-1.056-1.752c1.344-1.296 3.024-1.872 4.872-1.872 2.592 0 4.848 1.08 4.848 4.176V27zm-5.28-1.44c1.08 0 2.16-.408 2.76-1.2v-1.776c-.6-.792-1.68-1.2-2.76-1.2-1.416 0-2.496.84-2.496 2.088 0 1.272 1.08 2.088 2.496 2.088zM43.22 27H40.7V15.408h2.52v1.68c.888-1.104 2.28-1.968 3.768-1.968v2.496a3.478 3.478 0 00-.768-.072c-1.08 0-2.496.72-3 1.56V27zm22.39 0h-2.52v-1.536c-.816.912-2.256 1.824-4.08 1.824-2.496 0-3.744-1.32-3.744-3.672v-8.208h2.52v7.272c0 1.8.912 2.376 2.352 2.376 1.272 0 2.376-.744 2.952-1.512v-8.136h2.52V27zm20.054 0h-2.52v-7.56c0-1.248-.552-2.088-1.92-2.088-1.128 0-2.184.768-2.688 1.536V27h-2.52v-7.56c0-1.248-.528-2.088-1.896-2.088-1.128 0-2.16.792-2.688 1.536V27h-2.52V15.408h2.52v1.56c.504-.696 2.016-1.848 3.792-1.848 1.728 0 2.784.864 3.168 2.112.648-1.032 2.184-2.112 3.936-2.112 2.112 0 3.336 1.152 3.336 3.504V27zm19.876 0h-2.52v-7.248c0-1.824-.936-2.4-2.352-2.4-1.272 0-2.376.768-2.976 1.536V27h-2.52V15.408h2.52v1.56c.769-.912 2.28-1.848 4.104-1.848 2.496 0 3.744 1.344 3.744 3.72V27zm8.558.288c-3.696 0-5.952-2.784-5.952-6.096 0-3.336 2.256-6.072 5.952-6.072s5.952 2.736 5.952 6.072c0 3.312-2.256 6.096-5.952 6.096zm0-2.232c2.16 0 3.336-1.8 3.336-3.864 0-2.04-1.176-3.84-3.336-3.84-2.136 0-3.336 1.8-3.336 3.84 0 2.064 1.2 3.864 3.336 3.864zM128.412 27H125.7l-4.728-11.592h2.712l3.384 8.688 3.384-8.688h2.688L128.412 27zm11.595.288c-3.696 0-5.952-2.784-5.952-6.096 0-3.336 2.256-6.072 5.952-6.072s5.952 2.736 5.952 6.072c0 3.312-2.256 6.096-5.952 6.096zm0-2.232c2.16 0 3.336-1.8 3.336-3.864 0-2.04-1.176-3.84-3.336-3.84-2.136 0-3.336 1.8-3.336 3.84 0 2.064 1.2 3.864 3.336 3.864zM165.145 27h-2.52v-7.248c0-1.824-.936-2.4-2.352-2.4-1.272 0-2.376.768-2.976 1.536V27h-2.52V15.408h2.52v1.56c.768-.912 2.28-1.848 4.104-1.848 2.496 0 3.744 1.344 3.744 3.72V27zm8.678.288c-3.504 0-6.072-2.424-6.072-6.096 0-3.36 2.448-6.072 5.88-6.072 3.48 0 5.688 2.64 5.688 6.288v.624h-8.928c.192 1.728 1.488 3.192 3.672 3.192 1.152 0 2.472-.456 3.312-1.296l1.152 1.656c-1.176 1.104-2.88 1.704-4.704 1.704zm3.072-7.056c-.072-1.368-1.008-3.048-3.288-3.048-2.136 0-3.144 1.656-3.24 3.048h6.528zm9.668 11.472c-1.968 0-3.432-.432-4.872-1.728l1.176-1.824c.96 1.08 2.16 1.488 3.696 1.488 1.656 0 3.432-.768 3.432-3.24v-1.32c-.888 1.176-2.208 1.944-3.72 1.944-2.952 0-5.136-2.136-5.136-5.952 0-3.768 2.136-5.952 5.136-5.952 1.464 0 2.784.648 3.72 1.896v-1.608h2.52V26.4c0 4.176-3.12 5.304-5.952 5.304zm.456-6.936c1.176 0 2.4-.696 2.976-1.536v-4.344c-.576-.84-1.8-1.536-2.976-1.536-2.016 0-3.288 1.488-3.288 3.72s1.272 3.696 3.288 3.696zm14.046 2.52c-3.696 0-5.952-2.784-5.952-6.096 0-3.336 2.256-6.072 5.952-6.072s5.952 2.736 5.952 6.072c0 3.312-2.256 6.096-5.952 6.096zm0-2.232c2.16 0 3.336-1.8 3.336-3.864 0-2.04-1.176-3.84-3.336-3.84-2.136 0-3.336 1.8-3.336 3.84 0 2.064 1.2 3.864 3.336 3.864zm3.96-14.856l-3.96 3.456h-1.8l3.36-3.456h2.4zm9.874 17.088c-3.504 0-5.976-2.592-5.976-6.096s2.472-6.072 5.976-6.072c2.28 0 3.624.96 4.44 2.064l-1.656 1.512c-.648-.912-1.536-1.344-2.664-1.344-2.088 0-3.504 1.584-3.504 3.84s1.416 3.864 3.504 3.864c1.128 0 2.016-.48 2.664-1.392l1.656 1.56c-.816 1.08-2.16 2.064-4.44 2.064zm7.974-13.296c-.864 0-1.56-.696-1.56-1.56 0-.864.696-1.56 1.56-1.56.864 0 1.56.696 1.56 1.56 0 .864-.696 1.56-1.56 1.56zM224.121 27h-2.52V15.408h2.52V27zm8.554.288c-3.696 0-5.952-2.784-5.952-6.096 0-3.336 2.256-6.072 5.952-6.072s5.952 2.736 5.952 6.072c0 3.312-2.256 6.096-5.952 6.096zm0-2.232c2.16 0 3.336-1.8 3.336-3.864 0-2.04-1.176-3.84-3.336-3.84-2.136 0-3.336 1.8-3.336 3.84 0 2.064 1.2 3.864 3.336 3.864zM12.808 4.358c-.105-.603.623-.988 1.062-.563l1.573 1.521a.632.632 0 00.734.104l1.933-1.025c.541-.287 1.133.287.864.837l-.96 1.964a.632.632 0 00.127.732l1.573 1.522c.44.425.078 1.166-.53 1.08l-2.165-.307a.632.632 0 00-.656.348l-.961 1.965c-.269.55-1.084.434-1.19-.168l-.378-2.155a.632.632 0 00-.534-.517l-2.165-.306c-.606-.086-.748-.898-.207-1.185L12.86 7.18a.632.632 0 00.327-.666l-.378-2.155zM128.267 4.522c.128-.599.947-.685 1.195-.126l.891 1.998a.627.627 0 00.642.371l2.176-.229c.609-.064.944.69.49 1.1l-1.626 1.463a.632.632 0 00-.155.727l.89 1.998c.25.559-.363 1.11-.894.804l-1.894-1.093a.633.633 0 00-.739.078l-1.625 1.463c-.455.41-1.168-.002-1.041-.6l.455-2.14a.634.634 0 00-.303-.679l-1.894-1.093c-.529-.306-.358-1.112.25-1.176l2.176-.23a.632.632 0 00.552-.496l.455-2.14h-.001zM66.032 37.89c-.138.597-.958.67-1.198.106l-.856-2.013a.632.632 0 00-.636-.382l-2.18.193c-.61.053-.932-.705-.47-1.107l1.65-1.436a.632.632 0 00.166-.724l-.856-2.014c-.24-.563.381-1.104.907-.789l1.876 1.125a.632.632 0 00.74-.065l1.65-1.436c.461-.402 1.168.022 1.03.618l-.49 2.132a.632.632 0 00.29.684l1.876 1.124c.524.316.34 1.119-.27 1.172l-2.179.193a.632.632 0 00-.56.487l-.49 2.132zM223.634 28.307c.44-.426 1.168-.04 1.062.563l-.379 2.155a.635.635 0 00.326.667l1.933 1.026c.541.287.398 1.098-.208 1.184l-2.166.306a.632.632 0 00-.535.516l-.378 2.155c-.105.603-.921.718-1.191.168l-.96-1.966a.634.634 0 00-.656-.348l-2.166.306c-.606.086-.967-.655-.528-1.08l1.573-1.52a.631.631 0 00.128-.733l-.96-1.964c-.268-.55.325-1.123.865-.836l1.932 1.025a.63.63 0 00.735-.103l1.573-1.52v-.001z"
            fill="#672F93"
          />
        </svg>
      </strong>

      
        <h3 className="  text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>

        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>

        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <Description />

      </div>
    </div>
  );
};

export default Service;
