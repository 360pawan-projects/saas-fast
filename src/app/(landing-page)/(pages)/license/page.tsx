import Link from "next/link";

export default function LicensePage() {
  return (
    <main className="py-10 container mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="leading-relaxed">
          <h1 className="text-2xl font-semibold pb-6">
            SassFast Boilerplate License Agreement
          </h1>
          <p className="mb-1">
            <strong>Personal License:</strong> Build unlimited projects as an
            individual.
          </p>
          <p className="mb-4">
            <strong>Team License:</strong> Build unlimited projects as a team.
          </p>
          <p className="mb-4">
            This License Agreement (&quot;Agreement&quot;) is entered into
            between SassFast, represented by Pawan Kumar, whose contact
            information is 360pawan@gmail.com, and you, the user
            (&quot;Licensee&quot;), regarding the use of the SassFast coding
            boilerplate (the &quot;Product&quot;) available at{" "}
            <Link href="/" target="_blank" className="text-blue-400">
              https://sassfast.com
            </Link>{" "}
            (the &quot;Website&quot;). By downloading, accessing, or using the
            Product, Licensee agrees to be bound by the terms and conditions of
            this Agreement.
          </p>
          <h2 className="text-lg font-semibold mb-1">1. Grant of License</h2>
          <h3 className="mb-2">
            <strong>1.1 Personal License</strong>
          </h3>
          <p className="mb-2">
            Subject to the terms and conditions of this Agreement, SassFast
            grants Licensee a non-exclusive, non-transferable, and no transfer
            of Personal License to use the SassFast coding boilerplate for the
            following purposes:
          </p>
          <p> Create unlimited projects.</p>
          <p className="mb-4">
            Build and develop applications or websites for personal use or
            commercial use.
          </p>
          <h3 className="mb-2">
            <strong>1.2 Team License</strong>
          </h3>
          <p className="mb-2">
            Subject to the terms and conditions of this Agreement, SassFast
            grants Licensee a non-exclusive, non-transferable, and no transfer
            of Team License to use the SassFast coding boilerplate for the
            following purposes:
          </p>
          <p> Create unlimited projects.</p>
          <p> Build and develop applications or websites as part of a team.</p>
          <p className="mb-4">
            {" "}
            Share the code with other members of the team.
          </p>
          <h2 className="text-lg font-semibold mb-1">2. Restrictions</h2>
          <h3 className="mb-2">
            <strong>Licensee shall not:</strong>
          </h3>
          <p className="mb-2">
            Modify, adapt, reverse engineer, decompile, disassemble, or create
            derivative works based on the SassFast boilerplate.
          </p>
          <p className="mb-2">
            Remove, alter, or obscure any copyright, trademark, or other
            proprietary notices from the SassFast boilerplate.
          </p>
          <p className="mb-2">
            Use the SassFast boilerplate in any way that violates applicable
            laws, regulations, or third-party rights.
          </p>
          <p className="mb-4">
            Sub-license, rent, lease, or transfer the SassFast boilerplate or
            any rights granted under this Agreement.
          </p>
          <h2 className="text-lg font-semibold mb-1">
            3. Ownership and Intellectual Property
          </h2>
          <p className="mb-4">
            SassFast retains all ownership and intellectual property rights in
            and to the SassFast boilerplate. This Agreement does not grant
            Licensee any ownership rights in the SassFast boilerplate.
          </p>
          <h2 className="text-lg font-semibold mb-1">
            4. Warranty and Disclaimer
          </h2>
          <p className="mb-4">
            The SassFast boilerplate is provided &quot;As is&quot; without
            warranty of any kind, either express or implied, including, but not
            limited to, the implied warranties of merchantability, fitness for a
            particular purpose, or noninfringement.
          </p>
          <h2 className="text-lg font-semibold mb-1">
            5. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, SassFast shall
            Not be liable for any direct, indirect, incidental, special,
            Consequential, or punitive damages arising out of or relating to the
            Use or inability to use the SassFast boilerplate, even if SassFast
            Has been advised of the possibility of such damages.
          </p>
          <h2 className="text-lg font-semibold mb-1">
            6. Governing Law and Jurisdiction
          </h2>
          <p className="mb-4">
            This Agreement shall be governed by and construed in accordance with
            the laws of Singapore, without regard to its conflict of law
            principles. Any dispute arising out of or in connection with this
            Agreement shall be subject to the exclusive jurisdiction of the
            courts located in Singapore.
          </p>
          <h2 className="text-lg font-semibold mb-1">7. Entire Agreement</h2>
          <p className="mb-4">
            This Agreement constitutes the entire agreement between Licensee and
            SassFast concerning the subject matter herein and supersedes all
            prior or contemporaneous agreements, representations, warranties,
            and understandings.
          </p>
          <strong>Last updated: 28 May 2024</strong>
          <p>SassFast Contact Information: 36pawan@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
