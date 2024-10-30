import ProfileCard from "../components/ProfileCard";

const FacultyAdvisors = () => {
  // faculty Advisors
  const facultyAdvisors = [
    {
      firstname: "Parimal",
      lastname: "Acharjee",
      role: "",
      imageUrl: "/teams/faculty/parimal_acharjee.png",
      details: "Dean Alumni Affairs & Outreach",
    },
  ];

  return (
    <div className="flex flex-col py-16 px-8" style={{ paddingTop: '30px' }}>
      {/* official bearers */}
      <h3 className="text-center text-orange-600 text-4xl">Dean Alumni Affairs and Outreach</h3>

      <div className="flex justify-center my-7 px-3 py-6">
        {facultyAdvisors.map((member, index) => (
          <div key={index} className="flex justify-center">
            <ProfileCard
              firstname={member.firstname}
              lastname={member.lastname}
              role={member.role}
              imageUrl={member.imageUrl}
              details={member.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyAdvisors;
