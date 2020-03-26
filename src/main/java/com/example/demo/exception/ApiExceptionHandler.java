package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
@RestController
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {Exception.class})
    public final ResponseEntity<ApiExceptionResponse> handleAllExceptions(Exception e, WebRequest request) {
        HttpStatus serverError = HttpStatus.INTERNAL_SERVER_ERROR;
        ApiExceptionResponse apiException = new ApiExceptionResponse(
                e.getMessage(),
                serverError,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiException, serverError);
    }


    @ExceptionHandler(value = {ApiRequestException.class})
    public final ResponseEntity<ApiExceptionResponse> handleApiRequestException(ApiRequestException e , WebRequest request) {
        // 1. Create payload containing exception details
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        ApiExceptionResponse apiException = new ApiExceptionResponse(
                e.getMessage(),
                badRequest,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        // 2. Return response entity
        return new ResponseEntity<>(apiException, badRequest);
    }
}
