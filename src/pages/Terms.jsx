export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Content Section */}
      <section className="py-20 px-6 lg:px-40 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Terms Content */}
          <div className="prose max-w-none space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-8">
                The following terms and conditions apply to all Job Seekers,
                Employers and other users who access or use the Site (website
                and job portal), or otherwise indicate their acceptance to this
                Agreement.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4 flex items-center">
                <span className="inline-block w-1 h-8 bg-primary rounded-full mr-4"></span>
                1. Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may make available certain job listings and other job-related
                contents through our platform. Job Listings are created and
                provided by third parties over whom we exercise no control.{" "}
                <span className="text-primary font-semibold">
                  We have no control over Job Listings and no obligation to
                  screen any Job Listing or include it in search results.
                </span>
              </p>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                1(a) Notice to Job Seekers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By creating a Job Seeker account through our platform, you are
                requesting and authorizing us to make available your resume to
                any Employer we believe may have an interest in your resume.
                When you apply to a Job Listing, you are requesting and
                authorizing us to make available your application information to
                the applicable Employer(s).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="text-primary font-semibold">
                  We do not guarantee that any Employer will receive, access,
                  read or respond to your resume or application.
                </span>{" "}
                We also do not guarantee the identity of any Employer or the
                validity of any job offer. Job Seekers are solely responsible
                for verifying the accuracy of any Employer or job offer.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3 mt-6">
                1(b) Notice to Employers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an Employer account, you agree that this
                Agreement and all of our policies apply to you. You also agree
                that we may activate messaging functions for use in connection
                with Job Listings, and that any Job Seekers who wish to indicate
                interest may only do so through our platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for the contents of any Job Listings you
                post and messages you send.{" "}
                <span className="text-primary font-semibold">
                  You shall indemnify, defend and hold harmless us from any
                  third-party claim or liability arising out of any Job Listing
                  posted by you or any message sent by you.
                </span>
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4 flex items-center">
                <span className="inline-block w-1 h-8 bg-primary rounded-full mr-4"></span>
                2. External Sites
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform contains links to other sites owned and operated by
                third parties. We are not responsible or liable for any third
                parties or for the availability of materials located on or
                through any External Sites. If you have concerns regarding such
                links, please contact the applicable site administrator.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4 flex items-center">
                <span className="inline-block w-1 h-8 bg-primary rounded-full mr-4"></span>
                3. Use of Site
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are not permitted to use our platform for commercial
                purposes without prior written agreement. Use of any automated
                system or software to extract data from the Site is prohibited.
                We reserve the right to take action, including legal
                proceedings, in relation to any unauthorized use of the Site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right at all times to terminate users and reclaim
                usernames for any reason.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4 flex items-center">
                <span className="inline-block w-1 h-8 bg-primary rounded-full mr-4"></span>
                4. User Content
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some parts of our platform allow users to post Job Listings,
                resumes, information, messages, and other materials. Such
                functionality is designed to help users obtain career and
                company information, facilitate communication, and stay informed
                about jobs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-primary font-semibold">
                  We do not endorse and are not responsible for any User
                  Content.
                </span>{" "}
                By accessing the Site, you acknowledge that you may come into
                contact with content that you find harmful, offensive, or
                objectionable, and we shall have no liability with respect to
                such content.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-8 backdrop-blur-2xl bg-gradient-to-br from-primary/10 to-primary-fixed/10 border border-primary/50 rounded-2xl">
              <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                <span className="text-2xl mr-3">⚖️</span> Disclaimer
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This platform is provided without warranty. We assume no
                responsibility for communications between users or for any
                breach of these terms. By using our platform, you acknowledge
                and accept these terms in their entirety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
