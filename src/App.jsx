import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  return (
    <>
      <div
        className="card flex justify-content-center"
        style={{ backgroundColor: "var(--surface-200)" }}
      >
        <Button label="Check" icon="pi pi-check" />
      </div>
      <div className="p-inputgroup flex-1">
        <Button icon="pi pi-spin pi-spinner" className="p-button-success " />
        <InputText placeholder="Vote" />
        <Button icon="pi pi-times" className="p-button-danger" />
      </div>
      <div>
        <div className="grid">
          <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
            <span className="inline-flex align-items-center justify-content-center bg-blue-500 border-circle w-3rem h-3rem mb-4">
              <i className="pi pi-arrow-right text-white text-2xl"></i>
            </span>
            <span className="text-900 text-xl font-medium mb-4">
              Pay Later in 30 Days
            </span>
            <p className="text-600 line-height-3 py-0 m-0 px-3">
              Ullamcorper sit amet risus nullam eget felis eget nunc.
            </p>
          </div>
          <div className="col-12 md:col-4 flex flex-column align-items-center mb-3 md:mb-0">
            <span className="inline-flex align-items-center justify-content-center bg-cyan-500 border-circle w-3rem h-3rem mb-4">
              <i className="pi pi-shopping-cart text-white text-2xl"></i>
            </span>
            <span className="text-900 text-xl font-medium mb-4">
              Free Shipping
            </span>
            <p className="text-600 line-height-3 py-0 m-0 px-3">
              Ullamcorper sit amet risus nullam eget felis eget nunc.
            </p>
          </div>
          <div className="col-12 md:col-4 flex flex-column align-items-center">
            <span className="inline-flex align-items-center justify-content-center bg-orange-500 border-circle w-3rem h-3rem mb-4">
              <i className="pi pi-shield text-white text-2xl"></i>
            </span>
            <span className="text-900 text-xl font-medium mb-4">
              Secure Payment
            </span>
            <p className="text-600 line-height-3 py-0 m-0 px-3">
              Ullamcorper sit amet risus nullam eget felis eget nunc.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ol className="flex list-none m-0 pt-0 px-0 pb-3 align-items-center text-sm text-600 mb-3 overflow-x-auto">
          <li className="mr-2">Category</li>
          <li className="mr-2 inline-flex align-items-center">
            <i className="pi pi-angle-right text-sm"></i>
          </li>
          <li className="mr-2">Category</li>
          <li className="mr-2 inline-flex align-items-center">
            <i className="pi pi-angle-right text-sm"></i>
          </li>
          <li className="mr-2 inline-flex align-items-center">Category</li>
          <li className="mr-2">
            <i className="pi pi-angle-right text-sm"></i>
          </li>
          <li>Category</li>
        </ol>
        <div className="flex align-items-center justify-content-between mb-4">
          <span className="text-xl font-medium text-900">
            Product Title Placeholder
          </span>
          <span className="text-xl font-medium text-900">$123</span>
        </div>
        <div className="flex align-items-center justify-content-between lg:justify-content-start mb-5">
          <span className="mr-3">
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
          </span>
          <span className="text-500">
            5.00 | <b>20</b> reviews
          </span>
        </div>
        <p className="p-0 mt-0 mb-5 line-height-3 text-700">
          Dolor purus non enim praesent. At quis risus sed vulputate odio ut.
          Quis risus sed vulputate odio ut enim blandit volutpat. Ornare arcu
          odio ut sem nulla pharetra diam sit. Augue neque gravida in nrmentum
          et sollicitudin ac orci phasellus.
        </p>
        <div className="font-bold text-900 mb-3">Color</div>
        <div className="flex align-items-center mb-5">
          <div
            className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
          
          ></div>
          <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
          <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
        </div>
        <div className="mb-3 flex align-items-center justify-content-between">
          <span className="font-bold text-900">Size</span>
          <a className="cursor-pointer text-600 hover:text-900 transition-colors transition-duration-300 text-sm flex align-items-center">
            Size Guide <i className="ml-1 pi pi-angle-right"></i>
          </a>
        </div>
        <div className="flex align-items-center mb-5">
          <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
            XS
          </div>
          <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
            S
          </div>
          <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 text-blue-500">
            M
          </div>
          <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
            L
          </div>
          <div className="h-2rem w-2rem sm:h-3rem sm:w-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
            XL
          </div>
        </div>
        <div className="bg-yellow-200 text-yellow-900 text-sm inline-flex align-items-center px-2 py-1 font-medium mb-5">
          <i className="pi pi-exclamation"></i>
          <span>Only a few left!</span>
        </div>
        <button
          aria-label="Add to Cart"
          className="p-button p-component w-full mb-5"
        >
          <span className="p-button-icon p-c p-button-icon-left pi pi-shopping-cart"></span>
          <span className="p-button-label p-c">Add to Cart</span>
          <span
            role="presentation"
            className="p-ink"
            style={{height: "474px", width: "474px"}}
          ></span>
        </button>
        <ul className="list-none p-0 m-0 text-sm text-600">
          <li className="flex align-items-center mb-3">
            <i className="pi pi-credit-card mr-2"></i>
            <span>Pay in 21 days</span>
          </li>
          <li className="flex align-items-center mb-3">
            <i className="pi pi-send mr-2"></i>
            <span>Free Shipping</span>
          </li>
          <li className="flex align-items-center">
            <i className="pi pi-refresh mr-2"></i>
            <span>30 Days Return Policy</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
