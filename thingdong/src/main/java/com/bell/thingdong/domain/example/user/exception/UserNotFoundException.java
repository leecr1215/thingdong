package com.bell.thingdong.domain.example.user.exception;

import com.bell.thingdong.global.error.ErrorCode;
import com.bell.thingdong.global.error.exception.BusinessException;

public class UserNotFoundException extends BusinessException {
	public UserNotFoundException(String message) {
		super(message, ErrorCode.USER_NOT_FOUND);
	}
}
