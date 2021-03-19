import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class User extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      assignedPerson: props.assignedPerson,
      workshop: "",
      route: "",
      equipment: "",
      subject: "",
      teamMembers: {
        fullName: "",
        degree: "",
      },
      lostKind: [],
      causeOfChoosingSubject: "",
      flowChart: "",
      targetDescipton: {
        hedefTanimi1: "",
        mevcutDeger: "",
        hedefDeger: "",
        tarih1: "",
        tarih2: "",
      },
      stepActionPlan: "",
      actionPlan: {
        problem: "",
        yapilacakİs: "",
        adSoyad: "",
        tarih: "",
        sonuc: "",
      },
      solutionOfTheProblem: "",
      watching: "",
      targetComparison: {
        hedefTanimi2: "",
        hedef: "",
        simdi: "",
        sapmaYuzde: "",
      },
      standardization: "",
      deployment: "",
      homework: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.assignedPerson)
    const data = {
      assignedPerson: this.state.assignedPerson,
      workshop: this.state.workshop,
      route: this.state.route,
      equipment: this.state.equipment,
      subject: this.state.subject,
      //teamMember: {
      //  fullName: this.state.teamMember.fullName,
      //  degree: this.state.teamMember.degree,
      //},
      //teamMembers: this.state.teamMembers,
      //fullName:this.state.teamMembers.fullName,
      //degree:this.state.teamMembers.degree,
      lostKind: this.state.lostKind,
      causeOfChoosingSubject: this.state.causeOfChoosingSubject,
      flowChart: this.state.flowChart,
      //targetDescipton: this.state.targetDescipton,
      //hedefTanimi1: this.state.targetDescipton.hedefTanimi1,
      //mevcutDeger: this.state.targetDescipton.mevcutDeger,
      //hedefDeger: this.state.targetDescipton.hedefDeger,
      //tarih1: this.state.targetDescipton.tarih1,
      //tarih2: this.state.targetDescipton.tarih2,
      stepActionPlan: this.state.stepActionPlan,
      analyse: this.state.analyse,
      //actionPlan: this.state.actionPlan,
      //problem: this.state.actionPlan.problem,
      //adSoyad: this.state.actionPlan.yapilacakİs.adSoyad,
      //tarih: this.state.actionPlan.tarih,
      //sonuc: this.state.actionPlan.sonuc,
      solutionOfTheProblem: this.state.solutionOfTheProblem,
      watching: this.state.watching,
      //targetComparison: this.state.targetComparison,
      //hedefTanimi2: this.state.targetComparison.hedefTanimi2,
      //hedef: this.state.targetComparison.hedef,
      //simdi: this.state.targetComparison.simdi,
      //sapmaYuzde: this.state.targetComparison.sapmaYuzde,
      standardization: this.state.standardization,
      deployment: this.state.deployment,
      homework: this.state.homework,
    };

    fetch("http://localhost:8080/form/sendForm", {
      method: "POST",

      body: JSON.stringify(data), // data can be `string` or {object}!

      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())

      .catch((error) => console.error("Error:", error))

      .then((response) => console.log("Success:", response));
  }

  handleChange(event) {
    switch (event.target.id) {
      case "workshop":
        this.setState({
          workshop: event.target.value,
        });
        break;
      case "route":
        this.setState({
          route: event.target.value,
        });
        break;
      case "equipment":
        this.setState({
          equipment: event.target.value,
        });
        break;
      case "subject":
        this.setState({
          subject: event.target.value,
        });
        break;
      case "causeOfChoosingSubject":
        this.setState({
          causeOfChoosingSubject: event.target.value,
        });
        break;
      case "flowChart":
        this.setState({
          flowChart: event.target.value,
        });
        break;
      case "stepActionPlan":
        this.setState({
          stepActionPlan: event.target.value,
        });
        break;
      case "analyse":
        this.setState({
          analyse: event.target.value,
        });
        break;
      case "solutionOfTheProblem":
        this.setState({
          solutionOfTheProblem: event.target.value,
        });
        break;
      case "watching":
        this.setState({
          watching: event.target.value,
        });
        break;
      case "standardization":
        this.setState({
          standardization: event.target.value,
        });
        break;
      case "deployment":
        this.setState({
          deployment: event.target.value,
        });
        break;
      case "homework":
        this.setState({
          homework: event.target.value,
        });
        break;
      default:
    }
    console.log(this.state.workshop);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="workshop" sm={2}>
            Atölye
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="workshop"
              id="workshop"
              value={this.state.workshop}
              onChange={this.handleChange.bind(this)}
              placeholder="Atölyeyi Giriniz"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="route" sm={2}>
            Hat
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="route"
              id="route"
              value={this.state.route}
              onChange={this.handleChange.bind(this)}
              placeholder="Hattı Giriniz"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="equipment" sm={2}>
            Ekipman
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="equipment"
              id="equipment"
              value={this.state.equipment}
              onChange={this.handleChange.bind(this)}
              placeholder="Ekipmanı Giriniz"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="subject" sm={2}>
            1. Konu (Subject)
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="subject"
              id="subject"
              value={this.state.subject}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="teamMembers" sm={2}>
            2. Ekip Üyeleri(Team Members)
          </Label>
          <Col sm={4}>
            <Input
              type="text"
              name="fullName"
              id="teamMembers"
              placeholder="Adı Soyadı"
            />
          </Col>
          <Col sm={4}>
            <Input
              type="text"
              name="degree"
              id="teamMembers"
              placeholder="Ünvanı"
            />
          </Col>

          <Col sm={2}>
            <Button color="success">Ekle</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lostKind" sm={2}>
            3. Kayıp Türü(Loss Kind)
          </Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="lostKind" /> Check me out
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="lostKind" /> Check me out
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="lostKind" /> Check me out
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="lostKind" /> Check me out
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="lostKind" /> Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="causeOfChoosingSubject" sm={2}>
            4. Konuyu Seçme Nedeni
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="causeOfChoosingSubject"
              id="causeOfChoosingSubject"
              value={this.state.causeOfChoosingSubject}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="flowChart" sm={2}>
            5. Ekipman Çalışma Prensibi
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="flowChart"
              id="flowChart"
              value={this.state.flowChart}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="targetDescipton" sm={2}>
            6. Hedefin Belirlenmesi
          </Label>
          <Col sm={3}>
            <Input
              type="text"
              name="hedefTanimi"
              id="targetDescipton"
              placeholder="Tedef Tanimi"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="mevcutDeger"
              id="targetDescipton"
              placeholder="Mevcut"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="hedefDeger"
              id="targetDescipton"
              placeholder="Hedef"
            />
          </Col>
          Hedef Aralığı:
          <Col sm={2}>
            <Input type="date" name="tarih1" id="tarih1" />
            <Input type="date" name="tarih2" id="tarih2" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="stepActionPlan" sm={2}>
            7. 12 Adım Faaliyet Planı
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="stepActionPlan"
              id="stepActionPlan"
              value={this.state.stepActionPlan}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="analyse" sm={2}>
            8. Problemin Açıklanması-Analiz
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="analyse"
              id="analyse"
              value={this.state.analyse}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="actionPlan" sm={2}>
            9-A. Aksiyon Planı
          </Label>
          <Col sm={2}>
            <Input
              type="text"
              name="problem"
              id="actionPlan"
              placeholder="Problem"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="yapilacakİs"
              id="actionPlan"
              placeholder="Yapılacak İş"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="fullName"
              id="actionPlan"
              placeholder="Adı Soyadı"
            />
          </Col>
          <Col sm={2}>
            <Input type="date" name="tarih" id="tarih" />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="sonuc"
              id="actionPlan"
              placeholder="Sonuç"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="solutionOfTheProblem" sm={2}>
            9-B. Problemin Çözümünün Anlatılması
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="solutionOfTheProblem"
              id="solutionOfTheProblem"
              value={this.state.solutionOfTheProblem}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="watching" sm={2}>
            10-A. İzleme
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="watching"
              id="watching"
              value={this.state.watching}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="targetComparison" sm={2}>
            10-B. Hedef Karşılaştırma
          </Label>
          <Col sm={3}>
            <Input
              type="text"
              name="hedefTanimi"
              id="targetComparison"
              placeholder="Hedef Tanimi"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="hedef"
              id="targetComparison"
              placeholder="Hedef"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="simdi"
              id="targetComparison"
              placeholder="Şimdi"
            />
          </Col>
          <Col sm={3}>
            <Input
              type="text"
              name="sapmaYuzde"
              id="targetComparison"
              placeholder="Sapma%"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="standardization" sm={2}>
            11. Standartlaştırma
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="standardization"
              id="standardization"
              value={this.state.standardization}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="deployment" sm={2}>
            12-A. Yaygınlaştırma
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="deployment"
              id="deployment"
              value={this.state.deployment}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="homework" sm={2}>
            12-B. Ödevler
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="homework"
              id="homework"
              value={this.state.homework}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="danger">Onayla</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
