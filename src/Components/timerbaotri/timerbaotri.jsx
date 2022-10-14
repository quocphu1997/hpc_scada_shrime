import React, { useState } from "react";
import moment from "moment/moment";

export default function TimerBaoTri() {
  const [countup, setCountup] = useState(0);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Theo dõi thời gian chạy của thiết bị
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Mỗi một thiết bị từ khi bắt đầu hệ thống sẽ dược tính thời gian
            chạy. Mục đích của bảng này là giúp người vận hành theo dõi thời
            gian chạy theo dõi thời gian thay thế bảo trì từng thiết bị trong hệ
            thống.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="./images/motor1.png"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Bơm đầu vào
                </h2>
                <p className="text-gray-500">
                  thời gian chạy:{" "}
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
