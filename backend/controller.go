package main

import (
	"../model"
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	"log"
	"net/http"
)

type Response struct {
	statusCode int    `json:"statusCode"`
	body       string `json:"body"`
}

type App struct {
	DB *gorm.DB
}

//Initialize the connection to the database
func (a *App) ConnectToDb() {
	db, err := gorm.Open("mysql", "pes_user:pes2019@tcp(35.198.146.153)/hackathon?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		log.Fatal(err)
		log.Fatal("Could not connect database")
	}

	a.DB = model.DBMigrate(db)
}

func Register(w http.ResponseWriter, r *http.Request) {

}

func Login(w http.ResponseWriter, r *http.Request) {

}

func Home(w http.ResponseWriter, r *http.Request) {

	log.Print("new connection :3")
	res := &Response{
		statusCode: 200,
		body:       "Güelcom Jom",
	}
	content, err := json.Marshal(res)
	_, err = fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf("Error serving home. Error: %s", err.Error())
		log.Fatal(err)
	}
}

func GetQuestions(w http.ResponseWriter, r *http.Request) {
	questions := []model.Question{}
	a := &App{}
	a.ConnectToDb()
	a.DB.Find(&questions)
	res := &Response{
		statusCode: 200,
		body:       string(questions),
	}
	content, err := json.Marshal(res)
	fmt.Fprintf(w, content)
	if err != nil {
		fmt.Fprintf(w, "Error: %s", err)
	}

}

func CreateGroup(w http.ResponseWriter, r *http.Request) {
	//operations to create group on DB
	status_code := 200
	/*if err != nil {
		status_code = 500
	}*/
	res := &Response{
		statusCode: status_code,
		body:       "HOLA PUTA", /* func() {
			if err != nil {
				fmt.Sprintf("couldn't create group. Error: %s", err.Error())
			} else {
				"Group created successfully"
			}
		},*/
	}
	content, _ := json.Marshal(res)
	_, err := fmt.Fprintf(w, string(content))
	if err != nil {
		log.Printf(res.body)
	}
}

func UpdateGroup(w http.ResponseWriter, r *http.Request) {

}

func GetGroups(w http.ResponseWriter, r *http.Request) {

}

func GetUsers(w http.ResponseWriter, r *http.Request) {

}

func GetAnswers(w http.ResponseWriter, r *http.Request) {

}

func AddUser(w http.ResponseWriter, r *http.Request) {

}
