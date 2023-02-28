import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const steps = [
  { id: 1, name: "Login", href: "#", status: "complete" },
  { id: 2, name: "Shipping Address", href: "#", status: "current" },
  { id: 3, name: "Payment Method", href: "#", status: "upcoming" },
  { id: 4, name: "Complete", href: "#", status: "upcoming" },
];

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <nav aria-label="Progress" className="mb-8 bg-white">
      <ol className="border border-gray-300 divide-y divide-gray-300 rounded-md md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex-1 md:flex">
            {activeStep > stepIdx ? (
              <a href={step.href} className="flex items-center w-full group">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary group-hover:bg-primary">
                    <AiOutlineCheck
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className={`ml-4 text-sm font-medium text-gray-900 ${
                      stepIdx > activeStep ? "text-primary" : null
                    }`}
                  >
                    {step.name}
                  </span>
                </span>
              </a>
            ) : activeStep === stepIdx ? (
              <a
                href={step.href}
                className="flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 rounded-full border-primary">
                  <span className="text-primary">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-primary">
                  {step.name}
                </span>
              </a>
            ) : (
              <a href={step.href} className="flex items-center group">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">
                      {step.id}
                    </span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute top-0 right-0 hidden w-5 h-full md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="w-full h-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
