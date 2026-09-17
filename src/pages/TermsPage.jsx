import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500">
          Effective Date: 14 September 2026 | EXPGLO BUSINESS PRIVATE LIMITED
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-700 leading-relaxed space-y-8"
      >
        <div className="border-b border-slate-200 pb-6">
          <p
            className="text-xs font-bold uppercase tracking-wider text-brand-green"
          >
            Effective Date: 14 September 2026
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: 14 September 2026
          </p>
        </div>

        <p>
          Welcome to <strong>ExpGlo Business Private Limited</strong> ("ExpGlo
          Business", "Company", "we", "us", or "our").
        </p>
        <p>
          These Terms &amp; Conditions ("Terms") govern your access to and use
          of our website, digital platforms, services, content, products, and
          related services.
        </p>
        <p>
          By accessing or using our website or services, you acknowledge that
          you have read, understood, and agreed to these Terms. If you do not
          agree with any part of these Terms, please do not use our website or
          services.
        </p>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            1. About ExpGlo Business
          </h2>
          <p className="mt-3">
            ExpGlo Business Private Limited is a company engaged in developing
            and operating business, startup, technology, education, networking,
            and related digital initiatives.
          </p>
          <p className="mt-3">
            Our business may operate through different business units, brands,
            products, and platforms, including:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>ExpGlo Fund</li>
            <li>ExpGlo Startup School</li>
            <li>
              Other products, services, or initiatives introduced by the Company
              from time to time.
            </li>
          </ul>
          <p className="mt-3">
            Each individual product or business unit may have additional terms
            applicable to its specific services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">2. Eligibility</h2>
          <p className="mt-3">You may use our website and services only if:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>
              You are legally capable of entering into a binding agreement;
            </li>
            <li>The information provided by you is accurate and complete;</li>
            <li>You comply with applicable laws and regulations;</li>
            <li>
              Your use of the website is not prohibited by applicable law.
            </li>
          </ul>
          <p className="mt-3">
            Where a particular service has additional age or eligibility
            requirements, those requirements will apply.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">3. Website Use</h2>
          <p className="mt-3">
            You agree to use our website only for lawful purposes.
          </p>
          <p className="mt-3">You must not:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>Use the website for fraudulent or unlawful activities;</li>
            <li>Attempt to gain unauthorized access to our systems;</li>
            <li>Interfere with website security or functionality;</li>
            <li>Introduce viruses, malware, or harmful code;</li>
            <li>
              Copy, reproduce, or commercially exploit our website without
              permission;
            </li>
            <li>Impersonate another person or entity;</li>
            <li>Submit false, misleading, or fraudulent information;</li>
            <li>
              Use automated systems to access or scrape the website without
              authorization.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            4. Information Provided by Users
          </h2>
          <p className="mt-3">
            Where you submit information through our website, you are
            responsible for ensuring that such information is:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>Accurate, current, complete, and lawful;</li>
            <li>Not misleading;</li>
            <li>Not infringing the rights of another person.</li>
          </ul>
          <p className="mt-3">
            We may rely on the information submitted by you for providing
            relevant services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            5. Intellectual Property
          </h2>
          <p className="mt-3">
            Unless otherwise stated, all content available on the website,
            including the Company name, logos, brand identity, designs,
            graphics, text, videos, software, website layout, documents, and
            original materials, is owned by or licensed to ExpGlo Business
            Private Limited.
          </p>
          <p className="mt-3">
            You may not reproduce, modify, distribute, sell, publish, or
            commercially exploit such content without prior written permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            6. Third-Party Services
          </h2>
          <p className="mt-3">
            Our website may contain links, integrations, or references to
            third-party websites, applications, payment providers, or services.
          </p>
          <p className="mt-3">
            We are not responsible for third-party websites, content, privacy
            practices, availability, or transactions. Your use of third-party
            services may be governed by their own terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">7. Payments</h2>
          <p className="mt-3">
            Where paid services are offered, the applicable price, subscription
            period, taxes, payment terms, and refund conditions will be
            displayed before purchase.
          </p>
          <p className="mt-3">
            Payments may be processed through third-party payment providers.
            ExpGlo Business Private Limited does not store complete payment-card
            information unless expressly permitted by applicable law and
            required for the relevant payment process.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            8. Service Availability
          </h2>
          <p className="mt-3">
            We aim to keep our website and services available, secure, and
            functional. However, we do not guarantee uninterrupted or error-free
            availability.
          </p>
          <p className="mt-3">
            Services may occasionally be unavailable because of maintenance,
            technical problems, security incidents, third-party failures,
            internet or infrastructure issues, or events beyond our reasonable
            control.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">9. User Content</h2>
          <p className="mt-3">
            If you upload, submit, or publish content through an ExpGlo
            platform, you remain responsible for that content.
          </p>
          <p className="mt-3">
            You represent that you have the necessary rights to submit the
            content and that it does not violate applicable law or third-party
            rights.
          </p>
          <p className="mt-3">
            You grant the Company a non-exclusive, worldwide, royalty-free
            licence to host, store, display, reproduce, and process such content
            to the extent reasonably necessary to operate and improve the
            relevant service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            10. Prohibited Content
          </h2>
          <p className="mt-3">
            You must not submit content that is illegal, fraudulent, contains
            malware, infringes intellectual-property rights, contains
            unauthorized personal information, promotes unlawful activity, is
            abusive, threatening, or discriminatory, misrepresents a person,
            company, investment opportunity, or business, or violates applicable
            law.
          </p>
          <p className="mt-3">
            We may remove or restrict access to content that violates these
            Terms or applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">11. Privacy</h2>
          <p className="mt-3">
            Our collection and processing of personal data is governed by our
            applicable Privacy Policy.
          </p>
          <p className="mt-3">
            By using our services, you acknowledge that your information may be
            processed for legitimate purposes associated with providing,
            securing, and improving our services, subject to applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">12. Security</h2>
          <p className="mt-3">
            We take reasonable measures to protect our systems and information.
            However, no internet-based system can be guaranteed to be completely
            secure.
          </p>
          <p className="mt-3">
            You are responsible for maintaining the confidentiality of your
            account credentials and must notify us if you believe your account
            has been compromised.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">13. Disclaimer</h2>
          <p className="mt-3">
            Our website and general information are provided on an "as
            available" and "as is" basis to the extent permitted by law.
          </p>
          <p className="mt-3">
            We do not guarantee that the website will always be available,
            information will always be completely accurate or current, services
            will always meet your specific requirements, or errors will always
            be corrected immediately.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            14. Limitation of Liability
          </h2>
          <p className="mt-3">
            To the maximum extent permitted by applicable law, ExpGlo Business
            Private Limited shall not be liable for indirect, incidental,
            consequential, special, or punitive losses arising from your use of
            the website or services.
          </p>
          <p className="mt-3">
            Nothing in these Terms excludes liability that cannot legally be
            excluded under applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            15. Indemnification
          </h2>
          <p className="mt-3">
            You agree to indemnify and hold harmless ExpGlo Business Private
            Limited, its directors, officers, employees, representatives, and
            affiliates from claims, losses, liabilities, and expenses arising
            from your violation of these Terms, unlawful use of our services,
            submitted content, violation of third-party rights, or fraudulent or
            negligent conduct.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            16. Suspension and Termination
          </h2>
          <p className="mt-3">
            We may suspend or terminate access to our website or services if you
            violate these Terms, we reasonably suspect fraudulent activity, your
            activities create security or legal risks, termination is required
            by law, or the relevant service is discontinued.
          </p>
          <p className="mt-3">
            Termination will not affect rights or obligations that accrued
            before termination.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            17. Changes to These Terms
          </h2>
          <p className="mt-3">
            We may update these Terms from time to time. The updated version
            will be published on the relevant website with a revised "Last
            Updated" date.
          </p>
          <p className="mt-3">
            Your continued use of the website after an update may constitute
            acceptance of the updated Terms, to the extent permitted by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            18. Governing Law
          </h2>
          <p className="mt-3">
            These Terms shall be governed by the laws of India.
          </p>
          <p className="mt-3">
            Subject to applicable law, courts having appropriate jurisdiction in
            <strong>Nagla Padma Gwalior Road, Agra 282001, UP</strong> shall have jurisdiction
            over disputes arising from these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            19. Severability
          </h2>
          <p className="mt-3">
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions will continue to remain in
            effect.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            20. Entire Agreement
          </h2>
          <p className="mt-3">
            These Terms, together with applicable policies and additional
            service-specific terms, constitute the agreement governing your use
            of the relevant website or service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">21. Contact</h2>
          <p className="mt-3">
            For questions regarding these Terms, please contact:
          </p>
          <address className="not-italic mt-4 space-y-1">
            <strong>ExpGlo Business Private Limited</strong><br />
            Email:
            <a
              className="text-brand-green font-semibold hover:underline"
              href="mailto:info@expglobusiness.com"
              >info@expglobusiness.com</a
            ><br />
            Website: expglobusiness.com<br />
            Registered/Corporate Address:<br />
            Nagla Padma Gwalior Road, Agra 282001, UP
          </address>
        </div>

        <p className="border-t border-slate-200 pt-6 font-semibold text-slate-900">
          By using this website, you acknowledge that you have read and agree to
          these Terms &amp; Conditions.
        </p>
      </div>
    </section>

    <section className="hidden">
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6"
      >
        <p>
          These Terms & Conditions govern your access to and use of
          expglobusiness.com and related business ecosystem services provided by
          EXPGLO BUSINESS PRIVATE LIMITED.
        </p>

        <h3 className="text-base font-bold text-slate-900">
          1. Intellectual Property
        </h3>
        <p>
          All trademarks, logos, content, graphics, and architectural blueprints
          on this website are the intellectual property of EXPGLO BUSINESS
          PRIVATE LIMITED.
        </p>

        # TERMS & CONDITIONS **Effective Date:** 14 September 2026 **Last
        Updated:** 14 September 2026 Welcome to **ExpGlo Business Private
        Limited** (ExpGlo Business, Company, we, us, or our). These
        Terms & Conditions (Terms) govern your access to and use of our
        website, digital platforms, services, content, products and related
        services. By accessing or using our website or services, you acknowledge
        that you have read, understood and agreed to these Terms. If you do not
        agree with any part of these Terms, please do not use our website or
        services. ## 1. About ExpGlo Business ExpGlo Business Private Limited is
        a company engaged in developing and operating business, startup,
        technology, education, networking and related digital initiatives. Our
        business may operate through different business units, brands, products
        and platforms, including: * ExpGlo Fund * ExpGlo Startup School * Other
        products, services or initiatives introduced by the Company from time to
        time. Each individual product or business unit may have additional terms
        applicable to its specific services. ## 2. Eligibility You may use our
        website and services only if: * You are legally capable of entering into
        a binding agreement; * The information provided by you is accurate and
        complete; * You comply with applicable laws and regulations; * Your use
        of the website is not prohibited by applicable law. Where a particular
        service has additional age or eligibility requirements, those
        requirements will apply. ## 3. Website Use You agree to use our website
        only for lawful purposes. You must not: * Use the website for fraudulent
        or unlawful activities; * Attempt to gain unauthorized access to our
        systems; * Interfere with website security or functionality; * Introduce
        viruses, malware or harmful code; * Copy, reproduce or commercially
        exploit our website without permission; * Impersonate another person or
        entity; * Submit false, misleading or fraudulent information; * Use
        automated systems to access or scrape the website without authorization.
        ## 4. Information Provided by Users Where you submit information through
        our website, you are responsible for ensuring that such information is:
        * Accurate; * Current; * Complete; * Lawful; * Not misleading; * Not
        infringing the rights of another person. We may rely on the information
        submitted by you for providing relevant services. ## 5. Intellectual
        Property Unless otherwise stated, all content available on the website,
        including: * Company name; * Logos; * Brand identity; * Designs; *
        Graphics; * Text; * Videos; * Software; * Website layout; * Documents; *
        Original materials; is owned by or licensed to ExpGlo Business Private
        Limited. You may not reproduce, modify, distribute, sell, publish or
        commercially exploit such content without prior written permission. ##
        6. Third-Party Services Our website may contain links, integrations or
        references to third-party websites, applications, payment providers or
        services. We are not responsible for: * Third-party websites; *
        Third-party content; * Third-party privacy practices; * Third-party
        availability; * Third-party transactions. Your use of third-party
        services may be governed by their own terms. ## 7. Payments Where paid
        services are offered, the applicable price, subscription period, taxes,
        payment terms and refund conditions will be displayed before purchase.
        Payments may be processed through third-party payment providers. ExpGlo
        Business Private Limited does not store complete payment-card
        information unless expressly permitted by applicable law and required
        for the relevant payment process. ## 8. Service Availability We aim to
        keep our website and services available, secure and functional. However,
        we do not guarantee uninterrupted or error-free availability. Services
        may occasionally be unavailable because of: * Maintenance; * Technical
        problems; * Security incidents; * Third-party failures; * Internet or
        infrastructure issues; * Events beyond our reasonable control. ## 9.
        User Content If you upload, submit or publish content through an ExpGlo
        platform, you remain responsible for that content. You represent that
        you have the necessary rights to submit the content and that it does not
        violate applicable law or third-party rights. You grant the Company a
        non-exclusive, worldwide, royalty-free licence to host, store, display,
        reproduce and process such content to the extent reasonably necessary to
        operate and improve the relevant service. ## 10. Prohibited Content You
        must not submit content that: * Is illegal; * Is fraudulent; * Contains
        malware; * Infringes intellectual-property rights; * Contains
        unauthorized personal information; * Promotes unlawful activity; * Is
        abusive, threatening or discriminatory; * Misrepresents a person,
        company, investment opportunity or business; * Violates applicable law.
        We may remove or restrict access to content that violates these Terms or
        applicable law. ## 11. Privacy Our collection and processing of personal
        data is governed by our applicable Privacy Policy. By using our
        services, you acknowledge that your information may be processed for
        legitimate purposes associated with providing, securing and improving
        our services, subject to applicable law. ## 12. Security We take
        reasonable measures to protect our systems and information. However, no
        internet-based system can be guaranteed to be completely secure. You are
        responsible for maintaining the confidentiality of your account
        credentials and must notify us if you believe your account has been
        compromised. ## 13. Disclaimer Our website and general information are
        provided on an as available and as is basis to the extent permitted
        by law. We do not guarantee that: * The website will always be
        available; * Information will always be completely accurate or current;
        * Services will always meet your specific requirements; * Errors will
        always be corrected immediately. ## 14. Limitation of Liability To the
        maximum extent permitted by applicable law, ExpGlo Business Private
        Limited shall not be liable for indirect, incidental, consequential,
        special or punitive losses arising from your use of the website or
        services. Nothing in these Terms excludes liability that cannot legally
        be excluded under applicable law. ## 15. Indemnification You agree to
        indemnify and hold harmless ExpGlo Business Private Limited, its
        directors, officers, employees, representatives and affiliates from
        claims, losses, liabilities and expenses arising from: * Your violation
        of these Terms; * Your unlawful use of our services; * Your submitted
        content; * Your violation of third-party rights; * Your fraudulent or
        negligent conduct. ## 16. Suspension and Termination We may suspend or
        terminate access to our website or services if: * You violate these
        Terms; * We reasonably suspect fraudulent activity; * Your activities
        create security or legal risks; * Required by law; * The relevant
        service is discontinued. Termination will not affect rights or
        obligations that accrued before termination. ## 17. Changes to These
        Terms We may update these Terms from time to time. The updated version
        will be published on the relevant website with a revised Last Updated
        date. Your continued use of the website after an update may constitute
        acceptance of the updated Terms, to the extent permitted by law. ## 18.
        Governing Law These Terms shall be governed by the laws of India.
        Subject to applicable law, courts having appropriate jurisdiction in
        **Nagla Padma Gwalior Road, Agra 282001, UP** shall have jurisdiction over disputes
        arising from these Terms. ## 19. Severability If any provision of these
        Terms is found to be invalid or unenforceable, the remaining provisions
        will continue to remain in effect. ## 20. Entire Agreement These Terms,
        together with applicable policies and additional service-specific terms,
        constitute the agreement governing your use of the relevant website or
        service. ## 21. Contact For questions regarding these Terms, please
        contact: **ExpGlo Business Private Limited** Email:
        **[info@expglobusiness.com](mailto:info@expglobusiness.com)**
        **Website:** expglobusiness.com **Registered/Corporate Address:** NAGLA
        Nagla Padma Gwalior Road, Agra 282001, UP --- **By using this website, you
        acknowledge that you have read and agree to these Terms & Conditions.**
      </div>
    </section>

    <!-- FOOTER (PRD Section16 - Dark green background, 5 Columns) -->
    </main>
  );
}
