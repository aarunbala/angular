package com.angular.bingo.cucumber.stepdefs;

import com.angular.bingo.BingoApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = BingoApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
