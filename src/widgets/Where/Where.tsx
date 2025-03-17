import {
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
} from "@ant-design/icons";

export default function Where() {
  return (
    <div className="flex flex-col items-center gap-20">
      <section className="mt-40 whitespace-nowrap">
        <h1 className="text-5xl text-gray-950 font-semibold decoration-yellow-400">
          <span>Πού θα μας βρείτε</span>
        </h1>
      </section>
      <section>
        <PhoneOutlined style={{ fontSize: "40px" }} />
        <span className="text-2xl text-gray-950 font-bold">3232 234566</span>
      </section>
      <section>
        <MailOutlined style={{ fontSize: "40px" }} />
        <span className="text-2xl text-gray-950 font-bold">
          kofini@mail.com
        </span>
      </section>
      <section>
        <InstagramOutlined style={{ fontSize: "40px" }} />
        <span className="text-2xl text-gray-950 font-bold">kofini</span>
      </section>
      <section>
        <ShopOutlined style={{ fontSize: "40px" }} />
        <span className="text-2xl text-gray-950 font-bold">
          Kofineos 13, Greece
        </span>
      </section>
    </div>
  );
}
