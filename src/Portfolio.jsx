import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const projects = [
  {
    title: "Patent_metric_learning",
    description: "Contrastive loss를 이용한 유사특허기술 탐색 시스템",
    tags: ["Python", "BERT", "metric Learning", "Patent", "classification"],
    link: "https://github.com/joesiheon496/Organize_information/blob/master/Patent_metric_learning.ipynb"
  },
  {
    title: "Named Entity Recognition",
    description: "pdf 파일 내에 이름을 가진 개체 인식 코드",
    tags: ["NLP", "NER", "Named Entity Recognition", "Hugging Face"],
    link: "https://iii.ad/a0e2de"
  },
  {
    title: "네트워크 분석으로 효과적인 약물 조합 분석",
    description: "단백질 데이터를 이용한 효과적인 약물 조합탐색",
    tags: ["Degree distribution", "Network Analysis", "Node Betweenness Centrality", "PageRank"],
    link: "https://iii.ad/210f1a"
  },
  {
    title: "AIRECIST 개발",
    description: "혈액 면역 세포와, 동일병변 암 세포 크기 비교를 통한 암진단",
    tags: ["nnUNet", "Normalized cross correlation", "VoxelMorph"],
    link: "https://github.com/joesiheon496/Organize_information/blob/master/Tiimbio/%EA%B3%A0%EB%8C%80%EA%B5%AC%EB%A1%9C.pdf"
  },
  {
    title: "항만 샤시 자동화 작업",
    description: `- LiDAR 기반 컨테이너 자동 제어 시스템 개발에 참여하여 알고리즘 설계 및 구현 담당
    - 섀시 인식 및 좌표 추출을 위한 포인트 클라우드 처리 알고리즘을 Python으로 구현
    - 공간 분석 알고리즘 리서치 및 적용 후보 기술 선별
    - Siemens PLC와의 이더넷 통신 프로토콜을 테스트하고, 실시간 좌표 송신 로직 개발
    - Unity 시뮬레이션 환경을 활용한 알고리즘 검증 및 성능 실험 수행`,
    tags: ["nnUNet", "Normalized cross correlation", "VoxelMorph"],
    link: "https://github.com/joesiheon496/Organize_information/blob/master/Tiimbio/%EA%B3%A0%EB%8C%80%EA%B5%AC%EB%A1%9C.pdf"
  }
];

const skills = [
  "Python", "PyTorch", "TensorFlow", "Huggingface Transformers", "Unity",
  "Docker", "Git", "SQL", "Pandas", "PLC"
];

const research = [
  {
    title: "Contrastive loss를 이용한 유사특허기술 탐색 시스템",
    description: "이미지와 텍스트 쌍을 활용한 멀티모달 검색 정확도 향상 실험.",
    link: "https://github.com/joesiheon496/Organize_information/blob/master/%EC%97%B0%EA%B5%AC%EC%A0%95%EB%A6%AC.md"
  },
  {
    title: "얼굴 비식별화 시스템",
    description: "원본 이미지의 식별력을 제거하면서도 전체적인 맥락은 유지하는 얼굴 비식별화 기술을 개발",
    link: "https://github.com/joesiheon496/Organize_information/blob/master/%EC%97%B0%EA%B5%AC%EC%A0%95%EB%A6%AC_2.md"
  }
];

const Award = [
  {
    title: "특허 유니버시아드 수상",
    description: "특허 유니버스아드 조장 LG Display 장려상",
    link: "https://github.com/joesiheon496/Organize_information/blob/master/%5BA2%5DP20210518.hwp.pdf"
  }
];

const Publications = [
  {
    title: "대조 학습을 이용한 유사 특허기술 탐색 시스템",
    authors: "조시헌",
    correspondingAuthor: "손승우",
    coAuthors: "박상준, 권용성, 이미진",
    journal: "새물리",
    volume: "73",
    issue: "5",
    pages: "478-486",
    year: "2023",
    link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11419461"
  },
  {
    title: "Generative Adversarial Networks 기반 개인정보 보호를 위한 얼굴 비식별화",
    authors: "조시헌",
    correspondingAuthor: "이우기",
    coAuthors: "이수안",
    journal: "한국정보과학회 학술발표논문집",
    pages: "972-974",
    year: "2020",
    link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE09874643"
  }
];

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground">
          딥러닝 기반 문제 해결에 집중하는 개발자입니다. 실험과 서비스 구현 사이의 연결고리를 만듭니다.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-sm text-gray-700">
          AI 모델 설계와 실험, MLOps 환경 구성, 서비스화까지 전주기에 걸쳐 경험을 쌓아왔습니다.
          모델 성능뿐만 아니라 실제 사용자 환경에서의 적용성과 유지보수까지 고려합니다.
        </p>
        <p className="text-sm text-gray-700">
          최근에는 멀티모달 학습과 경량화 모델, 그리고 실시간 AI 시스템 개발에 관심을 가지고 연구 및 구현 중입니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        {projects.map((project, idx) => (
          <Card key={idx} className="border border-gray-200">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">Link</Button>
                </a>
              </div>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Research & Experiments</h2>
        {research.map((item, idx) => (
          <Card key={idx} className="border border-gray-200">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-medium">{item.title}</h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">GitHub</Button>
                </a>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Publications</h2>
        {Publications.map((pub, idx) => (
          <Card key={idx} className="border border-gray-200">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-medium">{pub.title}</h3>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">View</Button>
                </a>
              </div>
              <p className="text-sm text-gray-700"><strong>저자:</strong> {pub.authors}</p>
              <p className="text-sm text-gray-700"><strong>공저자:</strong> {pub.coAuthors}</p>
              <p className="text-sm text-gray-700"><strong>교신저자:</strong> {pub.correspondingAuthor}</p>
              <p className="text-sm text-gray-700">
                <strong>출판:</strong> {pub.journal}
                {pub.volume && `, Vol. ${pub.volume}`} 
                {pub.issue && `, No. ${pub.issue}`}
                , pp. {pub.pages}, {pub.year}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Award</h2>
        {Award.map((award, idx) => (
          <Card key={idx} className="border border-gray-200">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-medium">{award.title}</h3>
                <a href={award.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">GitHub</Button>
                </a>
              </div>
              <p className="text-sm text-gray-600">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="pt-6 border-t text-sm text-center text-gray-400">
        Contact: josehan1234@gmail.com · GitHub: @joesiheon496
      </footer>
    </div>
  );
}
