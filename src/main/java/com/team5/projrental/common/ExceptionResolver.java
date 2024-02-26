package com.team5.projrental.common;

import com.team5.projrental.common.exception.BadAuthorizationException;
import com.team5.projrental.common.exception.ErrorCode;
import com.team5.projrental.common.exception.RestApiException;
import com.team5.projrental.common.exception.base.*;
import com.team5.projrental.common.exception.thrid.ClientException;
import com.team5.projrental.common.exception.thrid.ServerException;
import com.team5.projrental.common.model.ErrorResultVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.async.AsyncRequestTimeoutException;
import org.springframework.web.method.annotation.HandlerMethodValidationException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.Arrays;

import static com.team5.projrental.common.exception.ErrorCode.BAD_TYPE_EX_MESSAGE;

@RestControllerAdvice
@Slf4j
public class ExceptionResolver {


    // 400
    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(BadAuthorizationException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(e.getMessage()).build());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(NotEnoughInfoException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(e.getMessage()).build());
    }

    @ExceptionHandler({MethodArgumentTypeMismatchException.class})
    public ResponseEntity<ErrorResultVo> resolve(MethodArgumentTypeMismatchException eBase) {
        log.warn("error message", eBase);
        return ResponseEntity.status(BAD_TYPE_EX_MESSAGE.getCode())
                .body(ErrorResultVo.builder().errorCode(BAD_TYPE_EX_MESSAGE.getCode())
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(BAD_TYPE_EX_MESSAGE.getMessage()).build());
    }


    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(HandlerMethodValidationException eBase) {
        StringBuilder sb = new StringBuilder();
        eBase.getAllErrors().forEach(e1 -> {
            sb.append(e1.getDefaultMessage());
            log.warn("error message = {}", e1);

        });
        log.warn("error message", eBase);
        String errorMessage = sb.toString();
        int errorCode = Arrays.stream(ErrorCode.values()).filter(e -> e.getMessage().equals(errorMessage)).findFirst()
                .orElse(ErrorCode.SERVER_ERR_MESSAGE).getCode();
        return ResponseEntity.status(errorCode)
                .body(ErrorResultVo.builder().errorCode(errorCode)
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(errorMessage).build());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(BadInformationException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(e.getMessage()).build());

    }


    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(NoSuchDataException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(e.getMessage()).build());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(IllegalException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(e.getMessage()).build());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(RestApiException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(e.getMessage()).build());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(MethodArgumentNotValidException eBase) {
        StringBuilder sb = new StringBuilder();
        eBase.getAllErrors().forEach(e1 -> {
            sb.append(e1.getDefaultMessage());
            log.warn("error message = {}", e1);
        });
        String errorMessage = sb.toString();
        int errorCode = Arrays.stream(ErrorCode.values()).filter(e -> errorMessage.contains(e.getMessage())).findFirst()
                .orElse(ErrorCode.SERVER_ERR_MESSAGE).getCode();
        return ResponseEntity.status(errorCode)
                .body(ErrorResultVo.builder().errorCode(errorCode)
//                        .message(e.getErrorCode().getMessage()).build());
                        .message(errorMessage).build());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(HttpMessageNotReadableException e) {
        log.warn("error message", e);
        return ResponseEntity.status(400)
                .body(ErrorResultVo.builder().errorCode(400)
                        .message("잘못된 요청 입니다.").build());
    }

    // 500
    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(WrapRuntimeException e) {
        log.warn("error message", e);
        return ResponseEntity.status(500)
                .body(ErrorResultVo.builder().errorCode(500)
                        .message(ErrorCode.SERVER_ERR_MESSAGE.getMessage()).errorCode(500).build());

    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(RuntimeException e) {
        log.warn("error message", e);
        return ResponseEntity.status(500)
                .body(ErrorResultVo.builder().errorCode(500)
                        .message(ErrorCode.SERVER_ERR_MESSAGE.getMessage()).errorCode(500).build());

    }

    // ignore
    @ExceptionHandler
    public void resolve(AsyncRequestTimeoutException e) {

    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(ClientException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
                        .message(e.getMessage())
                        .errorCode(e.getErrorCode().getCode())
                        .reason(e.getReason())
                        .build()
                );

    }

    @ExceptionHandler
    public ResponseEntity<ErrorResultVo> resolve(ServerException e) {
        log.warn("error message", e);
        return ResponseEntity.status(e.getErrorCode().getCode())
                .body(ErrorResultVo.builder().errorCode(e.getErrorCode().getCode())
                        .message(e.getMessage())
                        .errorCode(e.getErrorCode().getCode())
                        .reason(e.getReason())
                        .build()
                );
    }
}
