/* eslint-disable no-unused-vars */
import React from "react";
import CareerLogo from "../../assets/images/zoommercarrerlogo.png";
import CareerPhoto from "../../assets/images/zoommerccareer.png";
import { Link } from "react-router-dom";
export default function Career() {
  return (
    <div className="custom-container">
      <div className=" mt-9">
        <div className="border-b border-gray-200">
          <h4 className="font-semibold text-base leading-6 text-black ">
            კარიერა
          </h4>
        </div>
        <div>
          <h3 className="font-bold text-center mt-4 mb-3">კარიერა ზუმერში</h3>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex items-items center flex-col justify-between gap-5">
            <span className="font-bold text-sm">
              ჩვენი განვითარების ისტორია:
            </span>
            <span>
              ზუმერის ისტორია ერთადერთი ფილიალით 2009 წელს დაიწყო. მაშინ ზუმერს
              მხოლოდ საბითუმო ვაჭრობის მიმართულება ჰქონდა, დიდი იმედები და უფრო
              დიადი გეგმები.{" "}
            </span>
            <span>
              დღეს საქართველოს მასშტაბით 18 ფილიალს და ყველაზე მსხვილ B2C
              პლატფორმას ვაერთიანებთ. ტექნოლოგიური პროგრესის ნათელი მხარეების,
              ცნობისმოყვარეობის ძალის და სულსწრაფობის გვჯერა.{" "}
            </span>
            <span>
              უკვე 14 წელია ტექნიკას ჩავკირკიტებთ, ახალ გაჯეტებთან ვურთიერთობთ
              და ტექნოლოგიების ყველაზე აუთვისებელ სივრცეებსაც ვიკვლევთ.{" "}
            </span>
            <span>
              მისია უცვლელია - გვინდა, ადამიანებს სიახლეებთან ფეხის აწყობასა და
              ტექნიკის მოშინაურებაში დავეხმაროთ. .{" "}
            </span>
          </div>
          <div>
            <img src={CareerLogo} />
          </div>
        </div>
        <div className="flex flex-row gap-6 mt-5">
          <div className="flex items-items center flex-col justify-between gap-5">
            <span className="font-bold text-sm">
              შენი განვითარების ისტორია:
            </span>
            <span>
              ტექნიკას და ტექნიკის უსაზღვრო შესაძლებლობებსაც ხომ ადამიანები
              ქმნიან? ამიტომ, პირველ რიგში, ადამიანებისა და მათი შესაძლებლობების
              გვწამს. ვაფასებთ და წავახალისებთ ყველა იდეას, ინიციატივასა თუ
              აზრს, რომელიც პოზიტიური ცვლილებებისკენ გვიბიძგებს.
            </span>
            <span>
              განვითარებისაკენ სწრაფვა, სისწრაფე და სილაღე, ჩანაფიქრების მყისვე
              განხორციელება თუ გახასიათებს - ბევრი საერთო გვქონია.
            </span>
            <span>
              გპირდებით, შენს პროფესიულ და პიროვნულ განვითარებაზე ვიზრუნებთ -
              ტრენინგებზე მიდგება საქმე, გუნდის შიდა აქტივობებზე, ყოველდღიურ
              საქმიანობასა თუ ურთიერთობებზე.
            </span>
            <span>
              სწორედ აქ დაგხვდება ის სტაბილური, მრავალფეროვანი და საინტერესო
              სამუშაო გარემო, რომელსაც ასე გულმოდგინედ ეძებ.
            </span>
          </div>
          <div>
            <img src={CareerPhoto} />
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="https://jobs.ge/?view=client&client=zoommer-georgia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            <span className="text-blue-700 font-bold text-md  cursor-pointer hover:opacity-100 underline">
              ზუმერში აქტიური ვაკანსიები
            </span>
          </Link>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            ხშირად დასმული კითხვები:
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            როგორი ანაზღაურებაა ზუმერში?
          </h4>
          <span>
            ანაზღაურება განსხვავებულ ფაქტორებზეა დამოკიდებული, მათ შორის
            პოზიციის შინაარსსა და კანდიდატის კვალიფიკაციაზე. თუმცა, გაგიმხელთ,
            რომ საქართველოს ბაზარზე პირობებიც საკმაოდ მიმზიდველი გვაქვს.
          </span>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            რამდენად მოქნილია კომპანია სტუდენტებისთვის?
          </h4>
          <span>
            გუნდში ძალიან ბევრი სტუდენტი გვყავს, ამიტომ, ზუმერელად გახდომით ბევრ
            ახალ მეგობარსაც შეიძენ. მუდმივად ვცდილობთ მათი პირველი სამსახური
            დასამახსოვრებელი და სასიამოვნო გამოცდილებად ვაქციოთ.
          </span>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            რა გზებით ზრუნავს კომპანია თანამშრომლების განვითარებაზე?
          </h4>
          <span>
            კარიერული განვითარების თანადაფინანსება: თუ გსურს მაგალითად,
            გრაფიკული დიზაინის კურსის გავლა, შესაძლებლობა გექნება, როგორც
            ზუმერის თანამშრომელმა, განსაკუთრებული ფასდაკლებით ისარგებლო.
            ინფორმაციული ტრენინგები ტექნიკის შესახებ: თანამედროვე ტექნოლოგიებსა
            და ტენდენციებში გასათვითცნობიერებლად ტექნიკას კიდევ უფრო ახლოს
            გაგაცნობთ. თანამშრომლების უკეთ გასაცნობად, შესაძლო გამოწვევების
            მარტივად დასაძლევად თუ საკუთარ თავთან მეტად ჩასაღრმავებლად,
            საინტერესო ტრენინგებსაც არ დავიშურებთ.
          </span>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            როგორ გამოვაგზავნოთ CV/რეზიუმე ზუმერში?
          </h4>
          <span>
            შენი CV/რეზიუმე ვაკანსიაში მითითებულ მეილზე გამოგვიგზავნე:
            <span className="text-blue-700 text-sm font-medium">
              vacancy@zoommer.ge;
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
