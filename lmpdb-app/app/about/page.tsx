'use client'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function About() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="container mx-md">
          <h1 className='text-5xl text-center pt-8 pb-4'>About LMPDB</h1>
          <p className='text-center text-md px-6'>The LMPDB is a compilation of problematic individuals in grassroots music scenes.<br/>The project exists to amplify the voices of victims within communities and spread awareness of bad actors. </p>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="How is this information verified?">
              <p>All listings are of alleged wrongdoings, alongside submitted pieces of evidence to support the claims made.</p>

              <p>Every piece of information provided by the LMPDB is crowdsourced by members of its respective community.</p>

              <p>All allegations are vetted via an anonymous group of unbiased individuals.</p>

              <p>Some allegations contain more evidence than others. For the protection of the LMPDB, it is ultimately up to the discretion of the body behind the LMPDB if certain allegations will be listed.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Can listings be redacted?">
              <p>To prevent malicious actors in communities, every listing is subject to modification and/or redaction when sufficient evidence is provided in contradiction to the reported allegation. </p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Anonymity">
              <p>There are many reasons why a victim would wish to remain anonymous when levying allegations against problematic individuals in a community. The LMPDB will respect these wishes when requested.</p>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Reporting">
              <p>When reporting an individual, please include:</p>
              <ul className="text-white">
                <li>- The full name of the individual</li>
                <li>- City and/or music scene they participate in</li>
                <li>- Individual’s public social media accounts</li>
                <li>- A detailed summary of their transgressions</li>
                <li>- All evidence corroborating the allegations</li>
                <li>- Forms of accepted evidence include but are not limited to:
                  <ul>
                    <li>- Legally obtained photo, video, or audio evidence of wrongdoing</li>
                    <li>- Acknowledgments of wrongdoing by individual (i.e. text correspondence where individual takes accountability for harming others)</li>
                    <li>- Any other pertinent information demonstrating the character of the individual</li>
                  </ul>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  )
}
